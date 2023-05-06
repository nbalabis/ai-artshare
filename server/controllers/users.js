import User from "../mongodb/models/user.js";

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username })
        const registeredUser = await User.register(user, password)

        req.login(registeredUser, err => {
            if (err) return next(err)
            res.status(200).json({ message: 'Account successfully created. Welcome to AI-ArtShare!' })
            console.log('Auth Successful')
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

export { register }