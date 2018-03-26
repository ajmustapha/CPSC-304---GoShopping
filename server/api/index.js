import { Router } from 'express'

import users from './users'
import employees from './employees'
import warehouse from './warehouse'
import customers from './customers'
import cart from './cart'
import items from './items'
import category from './category'
import loyalty from './loyalty'



const router = Router()

// Add USERS Routes
router.use(users)

// Added these but not sure if needed (Azlan)
router.use(employees)
router.use(warehouse)
router.use(customers)
router.use(cart)
router.use(items)
router.use(category)
router.use(loyalty)

export default router
