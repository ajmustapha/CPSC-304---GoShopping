var Sequelize = require('sequelize');

var attributes = {
    employee_id: {
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
    employee_sin: {
        type: Sequelize.STRING,
        isNumeric: true,
        len: [9,9],
    },
    email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        }
    },
    warehouse_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Warehouse,
          key: warehouse_id,
        }
    }
    address: {
        type: Sequelize.STRING,
    },
    position: {
        type: Sequelize.STRING,
    }
};

var options = {
    freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;
