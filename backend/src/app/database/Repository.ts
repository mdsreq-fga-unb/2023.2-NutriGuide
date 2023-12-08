import urlDb from "../connection/configDb";
import User from "../models/Usuario";
import mysql from 'mysql2';
import usuario from '../resource/SQL/usuario.json'
import nutricionista from '../resource/SQL/nutricionista.json'
import paciente from '../resource/SQL/paciente.json'
import Usuario from "../models/Usuario";
import UsuarioPaciente from "../models/UsuarioPaciente";
import UsuarioNutricionista from "../models/UsuarioNutricionista";

export default class Repository {

    public database;

    constructor() {
        this.database = mysql.createPool(urlDb);
    }

    public findUserByName(nome: string): Promise<Usuario | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<User[]>(usuario.findByName, [nome], (err, result) => {
                if (err) {
                    reject(err);

                    this.database.end();
                } else {
                    resolve(result?.[0]);

                    this.database.end();
                }
            });
        });
    }

    public findById(id: string): Promise<Usuario | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<User[]>(usuario.findById, [id], (err, result) => {
                if (err) {
                    reject(err);

                    this.database.end();
                } else {
                    resolve(result?.[0]);

                    this.database.end();
                }
            });
        });
    }

    public insertUserPaciente(user: Usuario): Promise<Usuario | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<User[]>(
                usuario.inserirPaciente, 
                [user.cpf, user.email, user.sexo, user.telefone, user.cep, user.data_nascimento, user.nome_usuario, user.tipo_usuario], 
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);
                    }
            });
        });
    }

    public trazUltimoIdInserido(): Promise<Usuario | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<Usuario[]>(
                usuario.trazUltimoIdInserido,  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);
                    }
            });
        });
    }

    public insertPaciente(userPaciente: UsuarioPaciente, idUsuario: number): Promise<Usuario | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<User[]>(
                paciente.inserir, 
                [userPaciente.peso, userPaciente.altura, userPaciente.queixa, userPaciente.comorbidades, userPaciente.medicacoes, idUsuario], 
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);

                        this.database.end();
                    }
            });
        });
    }

    getAllPacientes(): Promise<UsuarioPaciente[] | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<UsuarioPaciente[]>(
                paciente.trazerTodos,  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result);
                    }
            });
        });
    }

    getOnePaciente(idPaciente: string): Promise<UsuarioPaciente | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<UsuarioPaciente[]>(
                paciente.trazerPorId,
                [idPaciente],  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);
                    }
            });
        });
    }

    getAllNutricionistas(): Promise<UsuarioNutricionista[] | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<UsuarioNutricionista[]>(
                nutricionista.trazerTodos,  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result);
                    }
            });
        });
    }

    getOneNutricionista(idNutricionista: string): Promise<UsuarioNutricionista | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<UsuarioNutricionista[]>(
                nutricionista.trazerPorId,
                [idNutricionista],  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);
                    }
            });
        });
    }

    getOneNutricionistaByNomeUser(nome: string): Promise<UsuarioNutricionista | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<UsuarioNutricionista[]>(
                nutricionista.trazerPorNomeUsuario,
                [nome],  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);
                    }
            });
        });
    }

    getOnePacienteByNomeUser(nome: string): Promise<UsuarioNutricionista | undefined> {
        return new Promise((resolve, reject) => {
            this.database.query<UsuarioNutricionista[]>(
                paciente.trazerPorNomeUsuario,
                [nome],  
                (err, result) => {
                    if (err) {
                        reject(err);

                        this.database.end();
                    } else {
                        resolve(result?.[0]);
                    }
            });
        });
    }
    

}