import express from 'express';
import mysql from 'mysql2';
import urlDb from './app/repository/connection/configDb';


const app = express();

// Testando a conexão com o banco:
const connection = mysql.createConnection(urlDb);

console.log('Conectado com o banco!');

// criando a primeira tabela
// connection.query('CREATE TABLE tabela_teste ( id INTEGER, nome VARCHAR(50) );', (err, results) => {
//     console.log('retorno: ', results)
// });

// inserindo elemento:
// connection.query("INSERT INTO tabela_teste (id, nome) VALUES (1, 'Henrique') ", (err, results) => {
//     console.log('retorno: ', results);
// });

connection.query('SELECT * FROM tabela_teste', (err, results) => {
    console.log('retorno: ', results);
});

// fechando a conexão
connection.end();

app.get('/', (req, res) => {
    res.send('Olá mundo!');
})

app.listen(8080, () => {
    console.log('Rodando em "http://localhost:8080"');
});