import urlDb from "../connection/configDb";
import User from "../models/User";
import mysql from 'mysql2';
import usuario from '../resource/SQL/usuario.json'

export default class Repository {

    public database;

    constructor() {
        this.database = mysql.createPool(urlDb);
    }

    public findUserByName(nome: string): Promise<User | undefined> {
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

    public findById(id: string): Promise<User | undefined> {
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

}