//importando recuros importantes para o backend
const express = require('express');

//utilizar para conexao com o mongoDB
const mongoose = require('mongoose');
const cors = require('cors');

//utilizar para path do files
//const path = require('path');

const routes = require('./routes');

const app = express();

//conexão com o mongoDB
mongoose.connect('mongodb+srv://mod:mod@cleaningmarker-5ld3o.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

// cors é utilizado para q os recursos do servidor
// sejam acessados por uma página web de domínio diferente.
// entre as (), colocar o domínio.
app.use(cors());

app.use(express.json());

//utilizar quando for necessario fazer upload de arquivos no form
//app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3033);