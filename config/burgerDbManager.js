const ORM = require("./orm");
const connection = require("./connection");

module.exports = new ORM(connection);