var Sequelize = require('sequelize');

var attributes = {
    cart_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Item,
          key: item_id,
        }
    },
    item_quantity: {
        type: Sequelize.INTEGER,
        isNumeric: true,
    },
    customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Customers,
          key: customer_id,
        }
    }
};

var options = {
    freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
