var Sequelize = require('sequelize');

var attributes = {
    item_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    manufacturer: {
        type: Sequelize.STRING,
    },
    item_quantity: {
        type: Sequelize.INTEGER,
        isNumeric: true,
    },
    price: {
        type: Sequelize.INTEGER,
        isNumeric: true,
    },
    category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Category,
          key: category_id,
        }
    },
    sale_discount: {
        type: Sequelize.INTEGER,
    }
};

var options = {
    freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
