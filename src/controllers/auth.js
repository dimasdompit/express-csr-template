const Response = require('../helpers/serviceResponse');
const joi = require('joi');
const AuthService = require('../services/auth-service');

module.exports = {
    /**
     * @route POST /register
     * @param {*} req 
     * @param {*} res 
     */
    register: async (req, res) => {
        /** Validation Schema **/
        const schema = joi.object({
            username: joi.string().required(),
            password: joi.string().required()
        })

        try {
            const body = req.body;

            /** Validation Body Input **/
            const { error, value } = await schema.validate(body)
            if (error) return res.status(400).json(Response.badrequest({ message: error.message }));

            /** Call auth register service user **/
            const inserted = await AuthService.register(value);
            return res.status(inserted.status).json(inserted);
        } catch (error) {
            console.log(error);
            return Response.error();
        }
    },

    /**
     * @route POST /login
     * @param {*} req 
     * @param {*} res 
     */
    login: async (req, res) => {
        /** Validation Schema **/
        const schema = joi.object({
            username: joi.string().required(),
            password: joi.string().required()
        })

        try {
            const body = req.body;

            /** Validation Body Input **/
            const { error, value } = schema.validate(body);
            if (error) return res.status(400).json(Response.badrequest({ message: error.message }));

            /** Call auth login service user **/
            const result = await AuthService.login(value);
            return res.status(200).json(Response.success(result))
        } catch (error) {
            console.log(error);
            return res.status(500).json(Response.error());
        }
    }
}