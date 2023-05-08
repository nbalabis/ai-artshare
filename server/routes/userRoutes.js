import express from 'express'

import { register, logout } from '../controllers/users.js'

const router = express.Router()

router.route('/register')
    .post(register)

router.route('/logout')
    .get(logout)

export default router