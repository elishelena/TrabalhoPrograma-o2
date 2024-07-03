const sequelize = require("sequelize");
const banco = require("./banco")
const prova = require("./prova")

var aluno = banco.conexao.define(
    "aluno",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        email:{
            type:sequelize.STRING,
            allowNull:false
        },
        senha:{
            type:sequelize.STRING,
            allowNull:false
        }
    },
    { timestamps: false }
)

aluno.hasMany( prova.prova )
prova.prova.belongsTo( aluno )

module.exports = {aluno}