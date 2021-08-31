const knex = require('../conexao');

const cadastrarDocumento = async (req, res) => {
    const { kbsize, name, content } = req.body;

    const dataAtual = new Date().toLocaleDateString();

    try {

        const nomeExistente = await knex('document').where({ name }).first();

        if (nomeExistente) {
            return res.status(400).json("O nome do documento já existe");
        }

        // persistência do documento no banco de dados

        const documento = await knex('document').insert({kbsize, name, content, 'createdat': dataAtual}).returning('*');

        if (documento.length === 0) {
            return res.status(400).json("Não foi possível cadastrar o documento. Tente novamente mais tarde.");
        }

        return res.status(200).json('Documento cadastrado com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listarDocumentos = async (req, res) => {

    try {

        const listaDocumentos = await knex('document');

        return res.status(200).json(listaDocumentos);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterDocumento = async (req, res) => {
    const { id } = req.params;

    try {

        const documentoExistente = await knex('document').where({ id }).first();

        if (!documentoExistente) {
            return res.status(400).json("Documento não encontrado");
        }

        return res.status(200).json(documentoExistente);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirDocumento = async (req, res) => {
    const { id } = req.params;

    try {

        const documentoExistente = await knex('document').where({ id }).first();

        if (!documentoExistente) {
            return res.status(400).json('Documento não encontrado');
        }

        const produtoExcluido = await knex('document').where({ id }).del();

        if(!produtoExcluido) {
            return res.status(400).json('Não foi possível excluir o documento. Tente novamente mais tarde.')
        }

        return res.status(200).json('Produto excluído com sucesso');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarDocumento,
    listarDocumentos,
    obterDocumento,
    excluirDocumento
};