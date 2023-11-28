"use strict";
exports.__esModule = true;
exports.config = void 0;
require("dotenv/config");
exports.config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
};
