var Sequelize = require('sequelize');

var attributes = {
    warehouse_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    address: {
        type: Sequelize.STRING,
    }
};

var options = {
    freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
