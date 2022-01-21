const User = require("../models/user")

const createUser = async (req, res) => {
    try {
        await User.insertMany(req.body, (error, result) => {
            if (error) throw error;
            res.status(200).json({
                message: "create user success",
                data: result
            })
        })
    }
    catch (error) {
        res.status(500).json({ message: 'create user filed' })
    }
}

const getUser = async (req, res) => {
    try {
      const user = await User.find({ email: req.body.email })
      if(user.length === 0 ) throw err;
        res.status(200).json({ massage: "find user success!", data: user })
    } catch (err) {
        res.status(500).json({ massage: "find user filed"});
    }
}


module.exports = {
    createUser,
    getUser
}