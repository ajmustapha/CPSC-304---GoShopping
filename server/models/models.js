var connection = require('../configs/sequelize.js');

var UserMeta = require('./users');
var Users = connection.define('users', UserMeta.attributes, UserMeta.options);
module.exports.Users = Users;

var UserMeta = require('./employees');
var Users = connection.define('employees', UserMeta.attributes, UserMeta.options);
module.exports.Employees = Employees;

var UserMeta = require('./warehouse');
var Users = connection.define('warehouse', UserMeta.attributes, UserMeta.options);
module.exports.Warehouse = Warehouse;

var UserMeta = require('./customers');
var Users = connection.define('customers', UserMeta.attributes, UserMeta.options);
module.exports.Customers = Customers;

var UserMeta = require('./cart');
var Users = connection.define('cart', UserMeta.attributes, UserMeta.options);
module.exports.Cart = Cart;
