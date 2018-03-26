import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET warehouse listing. */
router.get('/warehouse', function (req, res, next) {
  const query = 'SELECT * FROM Warehouse;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(warehouse => {
      console.log(warehouse)
      res.json(warehouse)
    })
})

export default router
