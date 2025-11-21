const express = require("express");
const app = express();
const Veiculos = require ("./models/Veiculos");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
//configurar o body-parser
    
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());


app.post("/cadastro",function (req,res){
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

app.get("/", function(req,res){
    Veiculos.findAll().then(function(Veiculos){
        res.send(Veiculos)
        })

   });
app.get ("/:marca",function(req,res){
    Veiculos.findAll({ where : {"marca": req.params.marca}}).then (function(veiculo){
        res.send (veiculo);
        res.send ("Consulta realizada com sucesso");
    
    }).catch (function(erro){
        res.send("Veículo inexistente na base de dados")
    })


})


app.patch("/atualizar/:id",function(req,res){
    Veiculos.update({
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        cor: req.body.cor}, 
        {where:{"id": req.params.id}}

    ).then(function(){
        res.send ("Atualizado com sucesso")
    }).catch(function(erro){
        res.send ("erro ao atualizar o veiculo"+ erro);
    });

});

app.delete ("/deletar/:id",function(req,res){               //metódo da rota 
    Veiculos.destroy({ where:{"id": req.params.id  }});     // metódo do banco   
    res.send ("Veiculo deletado com sucesso").catch (function(erro){
        res.send("erro ao deletar dado"+ erro)
    })

})



app.listen(8081,function(){  
    console.log ("Servidor rodando")
});
