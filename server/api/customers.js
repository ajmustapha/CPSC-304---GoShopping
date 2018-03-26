import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET customers listing. */
router.get('/customers', function (req, res, next) {
  const query = 'SELECT * FROM Customers;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(customers => {
      console.log(customers)
      res.json(customers)
    })
})

export default router
