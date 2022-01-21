const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validateLoginInput = require("./validateLoginInput");
const User = require("../../models/user");
const SECRET_KEY = process.env.SECRET_KEY;


const login = async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res
            .status(404)
            .json({ message: "there is error with email or password.", errors });
    };

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: { email: "email not fond" } });
        };

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ errors: { password: "wrong password" } });
        };

        let payload = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            age: user.age,
        };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
        res.status(200).json({ message: "success", result: token });

    } catch (err) {
        res
            .status(500)
            .json({ message: "something went wrong", errors: err.message });
    }
};

module.exports = login;
