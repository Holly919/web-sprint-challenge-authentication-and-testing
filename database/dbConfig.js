const knex = require('knex');

const knexConfig = require('../knexfile.js');
const dotenv = process.env.DB_ENV || 'developement';


module.exports = knex(knexConfig.development);
