require('dotenv').config();
const jwt = require('jsonwebtoken');
const {JWT_KEY} = process.env;

module.exports = (data) => {
    return jwt.sign({payload: data}, JWT_KEY, {expiresIn: '1d'});
}