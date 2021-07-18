const { createPool } = require('mysql');

const db = createPool({
    connectionLimit: 15,
    host: 'mysql-39281-0.cloudclusters.net',
    port: 39296,
    user: 'admin',
    password: 'justdoitnow12',
    database: 'datex'
});

module.exports = { db };