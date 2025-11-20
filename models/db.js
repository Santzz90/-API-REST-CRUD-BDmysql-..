require('dotenv').config();
const { Sequelize } = require("sequelize");
const mysql = require("mysql2");
const sequelize = new Sequelize(
   process.env.MYSQLDATABASE,     //ASSOCIANDO A VARIÁVEL COM A DO RAILWAY 
   process.env.MYSQLUSER,
   process.env.MYSQLPASSWORD,
   {
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        dialect: "mysql",
        dialectModule: mysql,
        logging: false,
        pool: {max:5, min: 0, idle:3000, acquire:10000 } //filtro para evitar problemas como: conexão simultâneas evitando, assim gastos desnecessários
        //min= pode ou não manter uma conexão; idle= milisegundos de inatividade, acquire= tempo para uma conexão caso ele não consiga lança uma exceção.
   }

);

(async () => { //conexão com o banco de dados de forma assincrona; forçando para funcionar na hospedagem.
    try {
        await sequelize.authenticate();
        console.log("Banco funcionando fi de uma egua")
    }catch(erro){
     console.log("Deu ruim fi de uma egua" + erro);



    }


})                 


module.exports = {Sequelize,sequelize}