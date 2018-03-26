var Sequelize = require('sequelize');

var attributes = {
    customer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        references: Customers,
        key: customer_id,
    },
    points: {
        type: Sequelize.INTEGER,
        isNumeric: true
    }
};

var options = {
    freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
