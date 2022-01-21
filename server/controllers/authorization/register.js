const User = require("../../models/user");
const bcrypt = require("bcrypt");
const validateRegisterInput = require("./registerValidator");

const register = async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(401).json({ errors: errors });
    }

    await User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;
        if (user) {
            return res.status(401).json({ massage: "email already exists" });
        }

        //Password Encryption Before That it enters to the database
        bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
                if (err) throw err;
                req.body.password = hash;

                const { firstName, lastName, age, email, phone, password } = req.body;
                const newUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    password: req.body.password,
                    age: age,
                });
                try {
                    await newUser.save();
                    res.status(201).json({
                        success: true,
                        message: "create new user success",
                        data: newUser,
                    });
                } catch (error) {
                    res.status(401).json({
                        success: false,
                        message: "create new user filed",
                        error: error,
                    });
                }
            });
        });
    });
};

module.exports = register;