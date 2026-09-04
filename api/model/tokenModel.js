const { sequelize } = require("../config/bd.js") 
const { DataTypes } = require("sequelize")

const Token = sequelize.define( 
    'Token',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        token: DataTypes.STRING
    },
    {
        timestamps: false
    }
)

module.exports = { Token }