import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET cart listing. */
router.get('/cart', function (req, res, next) {
  const query = 'SELECT * FROM Cart;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(cart => {
      console.log(cart)
      res.json(cart)
    })
})

export default router
