const express = require('express');

const documentos = require('./controladores/documentos');

const rotas = express();

rotas.post('/documents', documentos.cadastrarDocumento);

module.exports = rotas;