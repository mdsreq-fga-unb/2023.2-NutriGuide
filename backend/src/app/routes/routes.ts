import { Router, NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import Repository from '../database/Repository';
import User from '../models/Usuario';
import UsuarioPaciente from '../models/UsuarioPaciente';
import Service from '../service/Service';
import ProgressoPaciente from '../models/ProgressoPaciente';
import Alimento from '../models/Alimento';
import PlanoAlimentar from '../models/PlanoAlimentar';
import Avaliacao from "../models/Avaliacao";
import Post from "../models/Post";
import Comentario from "../models/Comentario";
import nodemailer from "nodemailer";

const routes = Router();

routes.get('/', async (req, res) => {
    res.send('Bem vindo a API do nutriguide!');
});

// Responsável pela criação do token:
const SECRET = 'sdjiodsmadsojqwjieqwaasdbmbadetr';

// rota de login:
routes.post('/login', async (req, res) => {

    const { nome, email } = req.body;

    // validações:
    if (!nome) {
        return res.status(422).json({ msg: 'O nome é obrigatório!' });
    }

    if (!email) {
        return res.status(422).json({ msg: 'O e-mail é obrigatório' });
    }

    // verificar se o usuário existe
    const repository = new Repository();
    const user: User | undefined = await repository.findUserByName(nome);

    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado!' });
    }

    if (email != user.email) {
        return res.status(404).json({ msg: 'E-mail inválido!' });
    }

    try {

        const token = jwt.sign(
            {
                id: user.id
            }
            , SECRET
        );

        res.status(200).json(
            {
                msg: 'Logado com sucesso!',
                token: token
            }
        );

    } catch (err) {
        console.log('Erro: ', err);

        res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
    }

});

// Rota protegida -> Trás od dados do usuário através do seu nome:
routes.get('/user/nome', checkToken, async (req, res) => {

    const { nome } = req.query;

    // verificar se o usuário existe:
    const repository = new Repository();
    const user: User | undefined = await repository.findUserByName(String(nome));

    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado!' });
    }

    res.status(200).json(user);
});

// Middleware jwt que verifica o token:
function checkToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado!' });
    }

    try {
        jwt.verify(token, SECRET);
        next();     // Quando não da erro a função next permite que o endpoint continue sendo executado
    } catch (err) {
        return res.status(400).json({ msg: 'Token inválido!' });
    }
}

routes.get('/paciente', async (req, res) => {
    const { responsavel } = req.query;

    const service = new Service;
    const pacientes = await service.getAllPacientesByNutriName(String(responsavel));

    res.status(200).json(pacientes);
});

routes.get('/paciente/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const paciente = await service.getOnePaciente(id);

    if (paciente !== undefined) {
        res.status(200).json(paciente);
    } else {
        res.status(404).json({ msg: 'Paciente não encontrado!' })
    }

});

routes.get('/paciente-nome', async (req, res) => {
    const { nome } = req.query;

    const service = new Service();
    const paciente = await service.getOnePacienteByNomeUser(String(nome));

    if (paciente !== undefined) {
        res.status(200).json(paciente);
    } else {
        res.status(404).json({ msg: 'Paciente não encontrado!' })
    }

});

routes.post('/paciente', async (req, res) => {
    const paciente: UsuarioPaciente = req.body;

    const service = new Service();
    await service.insertPaciente(paciente);

    res.status(200).json({ msg: 'Paciente inserido com sucesso!' });
});

routes.get('/nutricionista', async (req, res) => {
    const service = new Service();
    const nutricionista = await service.getAllNutricionistas();

    res.status(200).json(nutricionista);
});

routes.get('/nutricionista/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const nutricionista = await service.getOneNutricionista(id);

    if (nutricionista !== undefined) {
        res.status(200).json(nutricionista);
    } else {
        res.status(404).json({ msg: 'Nutricionista não encontrado!' })
    }

});

routes.get('/nutricionista-nome', async (req, res) => {
    const { nome } = req.query;

    const service = new Service();
    const nutricionista = await service.getOneNutricionistaByNomeUser(String(nome));

    if (nutricionista !== undefined) {
        res.status(200).json(nutricionista);
    } else {
        res.status(404).json({ msg: 'Nutricionista não encontrado!' })
    }

});

routes.get('/nutricionista-filtro', async (req, res) => {
    const { nome, especialidade, regiao } = req.query;

    const service = new Service();
    const nutricionistas = await service.getAllNutricionistasFiltered(String(nome), String(especialidade), String(regiao));

    if (nutricionistas !== undefined) {
        res.status(200).json(nutricionistas);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhum nutricionista com os parametros aplicados!' })
    }

});

routes.get('/progresso-paciente/:idPaciente', async (req, res) => {
    const { idPaciente } = req.params;

    const service = new Service();
    const progresso: ProgressoPaciente[] | undefined = await service.getProgressoByIdPaciente(idPaciente);

    if (progresso !== undefined) {
        res.status(200).json(progresso);
    } else {
        res.status(404).json({ msg: 'Progressos não encontrados!' })
    }

});


routes.post('/progresso-paciente', async (req, res) => {
    const service = new Service();
    const progressoPaciente: ProgressoPaciente = req.body;

    await service.insertProgressoPaciente(progressoPaciente);

    res.json({ msg: 'Progresso do paciente registrado com sucesso!' });
});

routes.get('/refeicao', async (req, res) => {
    const service = new Service();
    const refeicao = await service.getAllRefeicoes();

    res.status(200).json(refeicao);
});

routes.post('/alimento', async (req, res) => {
    const alimento: Alimento = req.body;

    const service = new Service();
    await service.insertAlimento(alimento);

    res.status(200).json({ msg: 'Alimento inserido com sucesso!' });
});

routes.get('/alimento/:idPaciente', async (req, res) => {
    const { idPaciente } = req.params;

    const service = new Service();
    const alimentos = await service.getAlimentasByIdPaciente(idPaciente);

    if (alimentos !== undefined && alimentos!.length !== 0) {
        res.status(200).json(alimentos);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhum alimento registrado para o paciente!' })
    }
});

routes.post('/plano-alimentar', async (req, res) => {
    const plano: PlanoAlimentar = req.body;

    const service = new Service();
    await service.insertPlanoAlimentar(plano);

    res.status(200).json({ msg: 'Nome do plano alimentar criado com sucesso!' });
});

routes.get('/plano-alimentar', async (req, res) => {
    const { nome } = req.query;

    const service = new Service();
    const plano = await service.getPlanoAlimentarByName(String(nome));

    if (plano !== undefined) {
        res.status(200).json(plano);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhum plano alimentar registrado para o paciente!' })
    }
});

routes.get('/avaliacao/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const avaliacao = await service.getAvaliacoesById(id);

    if (avaliacao !== undefined && avaliacao!.length !== 0) {
        res.status(200).json(avaliacao);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhuma avaliação sobre esse nutricionista' })
    }
});

routes.post('/avaliacao', async (req, res) => {
    const avaliacao: Avaliacao = req.body;

    const service = new Service();
    await service.insertAvaliacao(avaliacao);

    res.status(200).json({ msg: 'Avaliação cadastrada no sistema!' });
});

routes.get('/post', async (req, res) => {
    const service = new Service();
    const posts = await service.getAllPost();

    if (posts !== undefined && posts!.length !== 0) {
        res.status(200).json(posts);
    } else {
        res.status(404).json({ msg: 'Não foram encontradas postagens!' })
    }
});

routes.get('/post/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const posts = await service.getPostByIdNutricionista(id);

    if (posts !== undefined && posts!.length !== 0) {
        res.status(200).json(posts);
    } else {
        res.status(404).json({ msg: 'Não foram encontradas postagens!' })
    }
});

routes.post('/post', async (req, res) => {
    const post: Post = req.body;

    const service = new Service();
    await service.insertPost(post);

    res.status(200).json({ msg: 'Postagem concluída!' });
});

routes.get('/comentario', async (req, res) => {
    const service = new Service();
    const comentarios = await service.getAllComentario();

    if (comentarios !== undefined && comentarios!.length !== 0) {
        res.status(200).json(comentarios);
    } else {
        res.status(404).json({ msg: 'Não foram encontradas postagens!' })
    }
});

routes.get('/comentario/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const comentario = await service.getAllComentarioByIdPost(id);

    if (comentario !== undefined && comentario!.length !== 0) {
        res.status(200).json(comentario);
    } else {
        res.status(404).json({ msg: 'A postagem não possui comentários!' })
    }
});

routes.post('/comentario', async (req, res) => {
    const comentario: Comentario = req.body;

    const service = new Service();
    await service.insertComentario(comentario);

    res.status(200).json({ msg: 'Comentário concluída!' });
});

// Módulo de envio de emails:
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'nutriguide018@gmail.com',
        pass: 'ogzi xssf wkma fhiu'             // senha de app, não é a senha do e-mail...
    },
    tls: {
        rejectUnauthorized: false,
    }
});

// email para notificar sobre cadastro
routes.post('/email-cadastro', async (req, res) => {
    const { emailPaciente, nome  } = req.body;

    const title: string = 'Você foi cadastrado no sistema';
    const html: string = 
    `
    <div>
        <h1>Olá, ${nome}</h1>
        <h2>Meus parabéns, você acabou de ser cadastrado no nosso sistema!</h2>
        <h2>Para acessar o site, basta informar o seu nome e seu email,</h2>
        <h2>clique no botão abaixo para visitar nosso site:</h2>
        <a href="https://nutriguide-req.netlify.app" style="display: inline-block; padding: 10px 20px; font-size: 16px; text-align: center; text-decoration: none; background-color: #28B225; color: #fff; border-radius: 5px;">Clique aqui para ir para o site</a>
        <h2>Muito obrigado!</h2>
    </div>
    `

    const service = new Service();
    await service.enviarEmail(transport, title, html, nome, emailPaciente);

    res.json({ msg: 'Email enviado com sucesso!' });
});

// email para notificar sobre o plano alimentar
routes.post('/email-plano-alimentar', async (req, res) => {
    const { emailPaciente, nome } = req.body;

    const title: string = 'Você possui um plano alimentar disponível para download!';
    const html: string = 
    `
    <div>
        <h1>Olá, ${nome}</h1>
        <h2>Seu nutricionista acabou de criar um plano alimentar para você</h2>
        <h2>clique no botão abaixo para conferir seu plano no nosso site:</h2>
        <a href="https://nutriguide-req.netlify.app" style="display: inline-block; padding: 10px 20px; font-size: 16px; text-align: center; text-decoration: none; background-color: #28B225; color: #fff; border-radius: 5px;">Clique aqui para ir para o site</a>
        <h2>Muito obrigado!</h2>
    </div>
    `

    const service = new Service();
    await service.enviarEmail(transport, title, html, nome, emailPaciente);

    res.json({ msg: 'Email enviado com sucesso!' });
});

// email para enviar uma mensagem para o nutricionista
routes.post('/email-mensagem-nutricionista', async (req, res) => {
    const { emailPaciente, nome, title, html, emailNutri } = req.body;

    const service = new Service();
    await service.enviarEmail(transport, title, html, nome, emailPaciente, emailNutri);

    res.json({ msg: 'Email enviado com sucesso!' });
});

export default routes;