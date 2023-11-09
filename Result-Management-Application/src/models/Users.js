const {Sequelize, sequelize} = require("../connection/dbconnect");

// Defining the table for the table
const users = sequelize.define("User",{
    rollno : {
        type:Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING(35),
        allowNull:false,
    },
    dob:{
        type:Sequelize.DATEONLY,
        allowNull:false,
    },
    score:{
        type:Sequelize.INTEGER(3),
        allowNull:false
    }
});

(async () =>{
    await sequelize.sync();
})();

module.exports = users;