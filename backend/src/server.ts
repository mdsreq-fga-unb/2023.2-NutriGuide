import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import Repository from './app/database/Repository';
import User from './app/models/Usuario';
import UsuarioPaciente from './app/models/UsuarioPaciente';
import Service from './app/service/Service';
import ProgressoPaciente from './app/models/ProgressoPaciente';
import Alimento from './app/models/Alimento';
import PlanoAlimentar from './app/models/PlanoAlimentar';

const app = express();

// Configurações da API
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Bem vindo a API do nutriguide!');
});

// Responsável pela criação do token:
const SECRET = 'sdjiodsmadsojqwjieqwaasdbmbadetr';

// rota de login:
app.post('/login', async (req, res) => {

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
app.get('/user/nome', checkToken, async (req, res) => {

    const { nome } = req.query;

    // verificar se o usuário existe:
    const repository = new Repository();
    const user: User | undefined = await repository.findUserByName(String(nome));

    if (!user) {
        return res.status(404).json({msg: 'Usuário não encontrado!'});
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

app.get('/paciente', async (req, res) => {
    const { responsavel } = req.query;

    const service = new Service;
    const pacientes = await service.getAllPacientesByNutriName(String(responsavel));

    res.status(200).json(pacientes);
});

app.get('/paciente/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const paciente = await service.getOnePaciente(id);

    if (paciente !== undefined) {
        res.status(200).json(paciente);
    } else {
        res.status(404).json({ msg: 'Paciente não encontrado!' })
    }
    
});

app.get('/paciente-nome', async (req, res) => {
    const { nome } = req.query;

    const service = new Service();
    const paciente = await service.getOnePacienteByNomeUser(String(nome));

    if (paciente !== undefined) {
        res.status(200).json(paciente);
    } else {
        res.status(404).json({ msg: 'Paciente não encontrado!' })
    }
    
});

app.post('/paciente', async (req, res) => {
    const paciente: UsuarioPaciente = req.body;

    const service = new Service();
    await service.insertPaciente(paciente);

    res.status(200).json({msg: 'Paciente inserido com sucesso!'});
});

app.get('/nutricionista', async (req, res) => {
    const service = new Service();
    const nutricionista = await service.getAllNutricionistas();

    res.status(200).json(nutricionista);
});

app.get('/nutricionista/:id', async (req, res) => {
    const { id } = req.params;

    const service = new Service();
    const nutricionista = await service.getOneNutricionista(id);

    if (nutricionista !== undefined) {
        res.status(200).json(nutricionista);
    } else {
        res.status(404).json({ msg: 'Nutricionista não encontrado!' })
    }
    
});

app.get('/nutricionista-nome', async (req, res) => {
    const { nome } = req.query;

    const service = new Service();
    const nutricionista = await service.getOneNutricionistaByNomeUser(String(nome));

    if (nutricionista !== undefined) {
        res.status(200).json(nutricionista);
    } else {
        res.status(404).json({ msg: 'Nutricionista não encontrado!' })
    }
    
});

app.get('/nutricionista-filtro', async (req, res) => {
    const { nome, especialidade, regiao } = req.query;

    const service = new Service();
    const nutricionistas = await service.getAllNutricionistasFiltered(String(nome), String(especialidade), String(regiao));

    if (nutricionistas !== undefined) {
        res.status(200).json(nutricionistas);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhum nutricionista com os parametros aplicados!' })
    }
    
});

app.get('/progresso-paciente/:idPaciente', async (req, res) => {
    const { idPaciente } = req.params;

    const service = new Service();
    const progresso: ProgressoPaciente[] | undefined = await service.getProgressoByIdPaciente(idPaciente);

    if (progresso !== undefined) {
        res.status(200).json(progresso);
    } else {
        res.status(404).json({ msg: 'Progressos não encontrados!' })
    }
    
});


app.post('/progresso-paciente', async (req, res) => {
    const service = new Service();
    const progressoPaciente: ProgressoPaciente = req.body;
    
    await service.insertProgressoPaciente(progressoPaciente);

    res.json({ msg: 'Progresso do paciente registrado com sucesso!' });
});

app.get('/refeicao', async (req, res) => {
    const service = new Service();
    const refeicao = await service.getAllRefeicoes();

    res.status(200).json(refeicao);
});

app.post('/alimento', async (req, res) => {
    const alimento: Alimento = req.body;

    const service = new Service();
    await service.insertAlimento(alimento);

    res.status(200).json({msg: 'Alimento inserido com sucesso!'});
});

app.get('/alimento/:idPaciente', async (req, res) => {
    const { idPaciente } = req.params;

    const service = new Service();
    const alimentos = await service.getAlimentasByIdPaciente(idPaciente);

    if (alimentos !== undefined && alimentos!.length !== 0) {
        res.status(200).json(alimentos);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhum alimento registrado para o paciente!' })
    }
});

app.post('/plano-alimentar', async (req, res) => {
    const plano: PlanoAlimentar = req.body;
    
    const service = new Service();
    await service.insertPlanoAlimentar(plano);

    res.status(200).json({msg: 'Nome do plano alimentar criado com sucesso!'});
});

app.get('/plano-alimentar', async (req, res) => {
    const { nome } = req.query;
    
    const service = new Service();
    const plano = await service.getPlanoAlimentarByName(String(nome));

    if (plano !== undefined) {
        res.status(200).json(plano);
    } else {
        res.status(404).json({ msg: 'Não foi encontrado nenhum plano alimentar registrado para o paciente!' })
    }
});

app.listen(3000, () => {
    console.log('Rodando em "http://localhost:3000"');
});