import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET employees listing. */
router.get('/employees', function (req, res, next) {
  const query = 'SELECT * FROM Employees;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(employees => {
      console.log(employees)
      res.json(employees)
    })
})

export default router
