const { DataTypes } = require('sequelize');
const sequelize = require('../configs/server');

module.exports = sequelize.define(
    'users',
    {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: "users"
    }
)