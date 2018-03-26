import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET items listing. */
router.get('/items', function (req, res, next) {
  const query = 'SELECT * FROM Items;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(items => {
      console.log(items)
      res.json(items)
    })
})

export default router
