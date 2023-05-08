import express from 'express'

import { register, logout, getUser } from '../controllers/users.js'

const router = express.Router()

router.route('/getuser')
    .get(getUser)

router.route('/register')
    .post(register)

router.route('/logout')
    .get(logout)

export default router