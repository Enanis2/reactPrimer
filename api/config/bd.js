const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('ig', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql',
    logging: false 
});

module.exports = { sequelize }