import User from "../mongodb/models/user.js";

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username })
        const registeredUser = await User.register(user, password)

        req.login(registeredUser, err => {
            if (err) return next(err)
            res.status(200).json({ message: 'Account successfully created. Welcome to AI-ArtShare!', registeredUser })
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const logout = (req, res) => {
    try {
        req.logout(err => {
            if (err) return next(err)
            res.status(200).json({ message: 'Successfully logged out!' })
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getUser = (req, res) => {
    try {
        const user = req.user
        res.status(200).json({ user })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const login = (req, res) => {
    res.status(200).json({ message: 'Welcome back!', user: req.user })
}

export { register, logout, getUser, login }