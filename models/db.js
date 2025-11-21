const { Sequelize } = require("sequelize");

const sequelize= new Sequelize(
    "garagem",
    "root",
    "",
    
    {
        host: "localhost",
        dialect: "mysql"

    }
);



           

sequelize.authenticate().then((function(){
    console.log ("Conexão com o banco de dados realizada com sucesso!");
})).catch(function(erro){
    console.log ("---Falhou miseravelmente--- : " + erro)
});
module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}