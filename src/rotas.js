const express = require('express');

const documentos = require('./controladores/documentos');

const rotas = express();

rotas.post('/documents', documentos.cadastrarDocumento);
rotas.get('/documents', documentos.listarDocumentos);
rotas.get('/documents/:id', documentos.obterDocumento);
rotas.delete('/documents/:id', documentos.excluirDocumento);

module.exports = rotas;