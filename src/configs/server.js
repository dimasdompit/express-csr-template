const {
    DB_NAME: name,
    DB_HOST: host,
    DB_USER: user,
    DB_PASS: pass
} = process.env

const Sequelize = require('sequelize');

const sequelize = new Sequelize(name, user, pass, {
    host,
    dialect: "mysql"
});

try {
    sequelize.authenticate()
    console.log("Database Connected")
} catch (error) {
    console.log(error)
}

module.exports = sequelize;