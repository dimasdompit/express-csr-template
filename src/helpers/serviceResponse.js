/*
* @param {object} {message?, data?}
* @returns {object}
*/

let resp = {};

module.exports = {
    // Created Response
    created: ({ message = "", data = "" } = {}) => {
        resp = {};
        resp.status = 201;
        resp.message = message ? message : "Created";
        data ? (resp.data = data) : false;
        return resp;
    },

    // Success Response
    success: ({ message = "", data = "" } = {}) => {
        resp = {};
        resp.status = 200;
        resp.message = message ? message : "Success";
        data ? (resp.data = data) : false;
        return resp;
    },

    // Deleted Response
    deleted: ({ message = "" } = {}) => {
        resp = {};
        resp.status = 204;
        resp.message = message ? message : "Deleted";
        return resp;
    },

    // Error Response
    error: ({ error = "" } = {}) => {
        resp = {};
        resp.status = 500;
        resp.error = error ? error : "Internal Server Error";
        return resp;
    },

    // Bad Request Response
    badrequest: ({ message = "" } = {}) => {
        resp = {};
        resp.status = 400;
        resp.message = message ? message : "Bad Request";
        return resp;
    },

    // Not Found Response
    notfound: ({ message = "" } = {}) => {
        resp = {};
        resp.status = 404;
        resp.message = message ? message : "Data Not Found";
        return resp;
    },

    // Unauthorized Response
    unauthorized: ({ message = "" } = {}) => {
        resp = {};
        resp.status = 401;
        resp.message = message ? message : "Unauthorized";
        return resp;
    },
}