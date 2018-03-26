var Sequelize = require('sequelize');

var attributes = {
    customer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fname: {
        type: Sequelize.STRING,
        validate: {
            is: ["^[a-z]+$",'i'],
        }
    },
    lname: {
        type: Sequelize.STRING,
        validate: {
            is: ["^[a-z]+$",'i'],
        }
    },
    password: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.INTEGER,
        isNumeric: true,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        }
    },
    creditcard: {
        type: Sequelize.STRING,
        isNumeric: true,
        validate: {
          isCreditCard: true,
          len: [16,16],
        }
    },
    address: {
        type: Sequelize.STRING,
    },
    cart_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Cart,
          key: cart_id,
        }
    }
};

var options = {
    freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
