const sequelize = require("sequelize");
const banco = require("./banco")



var prova = banco.conexao.define(
    "prova",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        anoProva:{
            type:sequelize.STRING,
            allowNull:false,
        },
        materia:{
            type:sequelize.STRING,
            allowNull:false
        },
        link:{
            type:sequelize.STRING,
            allowNull:false
        }
    },
    { timestamps: false }
)

module.exports = {prova}