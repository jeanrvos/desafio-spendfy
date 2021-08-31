const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'spendfy',
        password: 'testpw',
        database: 'spendfy_docs'
    }
});

module.exports = knex;