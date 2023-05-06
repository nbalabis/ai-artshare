import User from "../mongodb/models/user.js";

const register = async (req, res) => {
    try {
        // Assuming the form data is sent as JSON in the request body
        const { username, password } = req.body;
        const user = new User({ username })
        const registeredUser = await User.register(user, password)

        //TODO: LOG USER IN

        // Send a response with a success message
        res.status(200).json({ message: 'Account successfully created. Welcome to AI-ArtShare!' })

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

export { register }