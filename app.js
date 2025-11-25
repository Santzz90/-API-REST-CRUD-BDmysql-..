// Importa e configura o dotenv no arquivo principal
require('dotenv').config();

const express = require("express");
const app = express();
const Veiculos = require ("./models/Veiculos");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

// configurar o body-parser para lidar com JSON e dados de formulário
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//  ROTAS CRUD

// 1. CREATE (POST) Cadastrar Veículo
app.post("/cadastro", function (req,res){ //Post inserido professor
    Veiculos.create({
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        cor: req.body.cor
    }).then(function(){
        res.send("veiculo cadastrado com sucesso");
    }).catch (function(erro){
        res.send("Houve um erro: " + erro)
    });
});

// Listar Todos os Veículos
app.get("/", function(req,res){
    Veiculos.findAll().then(function(Veiculos){
        res.send(Veiculos)
    });
});

// Buscar Veículos por Marca

app.get ("/:marca",function(req,res){
    Veiculos.findAll({ where : {"marca": req.params.marca}}).then (function(veiculo){
        res.send (veiculo);
    }).catch (function(erro){
        res.send("Veículo inexistente na base de dados: " + erro)
    })
});


//  Atualizar Veículo 
app.put("/atualizar/:id", function(req,res){ //PUT inserido professor 
    Veiculos.update({
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        cor: req.body.cor}, 
        {where:{"id": req.params.id}}
    ).then(function(){
        res.send ("Atualizado com sucesso (PUT)")
    }).catch(function(erro){
        res.send ("erro ao atualizar o veiculo: "+ erro);
    });
});


//  Deletar Veículo
app.delete ("/deletar/:id",function(req,res){
    Veiculos.destroy({ where:{"id": req.params.id  }}) 
        .then(() => {
            res.send ("Veiculo deletado com sucesso");
        })
        .catch (function(erro){
            res.send("erro ao deletar dado: "+ erro)
        });
});

// Configura a porta do servidor. Usa a variável PORT do .env ou 8081 como padrão.
const PORT = process.env.PORT || 8081; 

app.listen(PORT,function(){  
    console.log (`Servidor rodando na porta ${PORT}`);
});