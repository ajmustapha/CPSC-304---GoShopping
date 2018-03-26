import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET category listing. */
router.get('/category', function (req, res, next) {
  const query = 'SELECT * FROM Category;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(category => {
      console.log(category)
      res.json(category)
    })
})

export default router
