const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dhruv@9125',
    database: 'airbnb'
});
module.exports = pool.promise();