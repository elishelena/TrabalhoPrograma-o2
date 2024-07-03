const express = require('express')
const banco = require("./banco")
const prova = require("./prova")
const aluno = require("./aluno")

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
banco.conexao.sync( function(){
    console.log("Banco de dados conectado.");
})

const PORTA = 3000
app.listen( PORTA, function(){
    console.log("Servidor iniciados na porta "+PORTA);
})

app.get("/aluno/", async  function(req, res) {
    const resultado = await aluno.aluno.findAll()
    res.send(resultado);
})

// app.get("/aluno/:id",async function(req, res) {
//     const resultado = await aluno.aluno.findByPk(req.params.id)
//     if( resultado == null ){
//         res.status(404).send({})
//     }else{
//         res.send(resultado);
//     }
    
// })

app.get("/aluno/:id",async function(req, res) {
    const alunoSelecionado = await aluno.aluno.findByPk(req.params.id, 
        { include: { model: prova.prova } } 
    )
    if( alunoSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(alunoSelecionado);
    } 
})

app.get("/aluno/nome/:nome",async function(req, res) {
    const resultado = await aluno.aluno.findAll({
        include: { model: prova.prova },
        where:{ nome:req.params.nome }
    })
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
})

app.post("/aluno/",async function(req,res){
    const resultado = await aluno.aluno.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha,
        idProva:req.body.idProva
    
    })
    res.send(resultado)
})

app.put("/aluno/:id",async function(req,res){
    const resultado = await aluno.aluno.update({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await aluno.aluno.findByPk(req.params.id))
    }
})

app.delete("/aluno/:id",async function(req,res){
    const resultado = await aluno.aluno.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})
///////////

app.get("/prova/",async function(req, res) {
    const resultado = await prova.prova.findAll()
    res.send(resultado);
})


app.get("/prova/:id",async function(req, res) {
    const provaSelecionada = await prova.prova.findByPk(req.params.id, 
        { include: { model: aluno.aluno } } 
    )
    if( provaSelecionada == null ){
        res.status(404).send({})
    }else{
        res.send(provaSelecionada);
    } 
})

app.get("/prova/materia/:materia",async function(req, res) {
    const resultado = await prova.prova.findAll({
        include: { model: aluno.aluno },
        where:{ materia:req.params.materia }
    })
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
})



app.post("/prova/",async function(req,res){
    const resultado = await prova.prova.create({
        anoProva:req.body.anoProva,
        materia:req.body.materia,
        link:req.body.link,
        alunoId:req.body.alunoId,
    })
    res.send(resultado)
})



app.put("/prova/:id",async function(req,res){
    const resultado = await prova.prova.update({
        anoProva:req.body.anoProva,
        materia:req.body.materia,
        link:req.body.link
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await prova.prova.findByPk(req.params.id))
    }
})



app.delete("/prova/:id",async function(req,res){
    const resultado = await prova.prova.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})