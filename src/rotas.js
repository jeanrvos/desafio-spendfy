const express = require('express');

const documentos = require('./controladores/documentos');
const weekday = require('./controladores/weekday');

const rotas = express();

rotas.post('/documents', documentos.cadastrarDocumento);
rotas.get('/documents', documentos.listarDocumentos);
rotas.get('/documents/:id', documentos.obterDocumento);
rotas.delete('/documents/:id', documentos.excluirDocumento);

// rota para retornar o dia da semana de acordo com os parâmetros informados

rotas.get('/weekday-after', weekday.calcularDia)

module.exports = rotas;