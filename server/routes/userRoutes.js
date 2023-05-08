import express from 'express'
import passport from 'passport'

import { register, logout, getUser, login } from '../controllers/users.js'

const router = express.Router()

router.route('/getuser')
    .get(getUser)

router.route('/register')
    .post(register)

router.route('/logout')
    .get(logout)

router.route('/login')
    .post(passport.authenticate('local'), login)

export default router