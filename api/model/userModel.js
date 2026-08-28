const { sequelize } = require("../config/bd.js") 
const { DataTypes } = require("sequelize")

const User = sequelize.define( 
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            validate: {
                isAlpha: true
            }
        }, 
        apellido:{
            type: DataTypes.STRING,
            validate: {
                isAlpha: true
            }
        },
        userName: DataTypes.STRING,
        mail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        edad: {
            type: DataTypes.TINYINT.UNSIGNED,
            validate: {
                min: {
                    args: 10,
                    msg: "Dale un jugete al niño coño"
                }
            }
        },
        password: DataTypes.STRING
    },
    {
        timestamps: false
    }
)

module.exports = { User }