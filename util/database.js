const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root','akshay',
    {  
        dialect: 'mysql', 
        host: 'localhost'
    });

module.exports = sequelize;

