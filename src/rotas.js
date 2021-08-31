const express = require('express');

const documentos = require('./controladores/documentos');

const rotas = express();

rotas.post('/documents', documentos.cadastrarDocumento);
rotas.get('/documents', documentos.listarDocumentos);

module.exports = rotas;