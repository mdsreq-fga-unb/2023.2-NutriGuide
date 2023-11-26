import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Olá mundo!');
})

app.listen(8080, () => {
    console.log('Rodando em "http://localhost:8080"');
});