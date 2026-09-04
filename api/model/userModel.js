const { sequelize } = require("../config/bd.js") 
const { DataTypes, TINYINT } = require("sequelize")

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
        userName: {
            type: DataTypes.STRING,
            unique: {
                msg: 'Usuario existente'
            }
        },
        mail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        rol: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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