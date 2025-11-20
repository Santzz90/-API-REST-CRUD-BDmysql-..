const db = require ("./db")

const Veiculos = db.sequelize.define ("veiculos",{
    marca: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    cor: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
    
});



Veiculos.sync({force:false});
module.exports = Veiculos
