const UserModels = require('../models/users');

/**
 * User GET Custom Data
 * @returns MySQL rows
 */
const getAllUserData = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await UserModels.findAll();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    });
}

/**
 * User GET By Username Custom Data
 * @param {*} username 
 * @returns MySQL rows
 */
const getUserDataByUsername = async (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await UserModels.findOne({ raw: true, where: { username: username } })
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * User POST
 * @param {*} data 
 * @returns MySQL rows
 */
const postUserData = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newData = await UserModels.create({
                ...data
            });
            resolve(newData)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllUserData,
    postUserData,
    getUserDataByUsername
}