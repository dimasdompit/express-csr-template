const AuthRepository = require('../repositories/auth');
const ServiceResponse = require('../helpers/serviceResponse');
const generateToken = require('../helpers/generateToken');
const { hashSync, genSaltSync, compareSync } = require('bcrypt');

module.exports = {
    /**
     * 
     * @param {*} username 
     */
    getAllUser: async () => {
        try {
            const getUser = await AuthRepository.getUserData();
            return ServiceResponse.success({ data: getUser });
        } catch (error) {
            console.log(error)
            return ServiceResponse.error();
        }
    },

    /**
     * 
     * @param {*} data 
     */
    login: async (data) => {
        try {
            const { username, password } = data;
            /** Call get user data by username from repository **/
            const getUser = await AuthRepository.getUserDataByUsername(username);

            /** Check if user not registered **/
            if (!getUser) return ServiceResponse.badrequest({ message: "You are not registered!" });

            /** Check matching password **/
            const passwordMatch = compareSync(password, getUser.password);
            if (!passwordMatch) return ServiceResponse.badrequest({ message: "Password is wrong!" });

            /** Generate user token **/
            getUser.token = generateToken(getUser);

            delete getUser.password;
            /** Return success **/
            return ServiceResponse.success({ data: getUser });
        } catch (error) {
            console.log(error)
            return ServiceResponse.error();
        }
    },

    /**
     * 
     * @param {*} data 
     */
    register: async (data) => {
        try {
            /** Call get user data by username from repository **/
            const userExist = await AuthRepository.getUserDataByUsername(data.username)
            /** Check if user is already taken **/
            if (userExist) return ServiceResponse.badrequest({ message: "Username is already taken!" })

            const validatedData = {
                ...data,
                username: data.username,
                password: hashSync(data.password, genSaltSync(1))
            }

            /** Call post user data from repository **/
            const result = await AuthRepository.postUserData(validatedData);
            delete result.dataValues.password;

            /** Return success **/
            return ServiceResponse.created({ message: "Insert data success", data: result });
        } catch (error) {
            console.log(error, `<<< ${__filename} | postUser()`);
            return ServiceResponse.error();
        }
    }
}