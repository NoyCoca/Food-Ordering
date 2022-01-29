const FoodType = require("../models/foodType");
const createFoodType = async (req, res) => {
    const { foodType, dishes, img } = req.body;
    const newFoodType = new FoodType({
        foodType: foodType,
        dishes: dishes,
        img:img
    })
    try {
        await newFoodType.save()
        res.status(200).json({ massage: "create new food type success", data: newFoodType });
    }
    catch (error) {
        res.status(500).json({ massage: "create new food type failed", error });
    }

}

const addDishes = async (req, res) => {
    const dishes = req.body;
    try {
        FoodType.findByIdAndUpdate(req.params.id
            , { $addToSet: { dishes: dishes } },
            { new: true },
            (error, result) => {
                if (error) throw error;
                res.status(200).json({ massage: "add dishes success", data: result });
            })
    }
    catch (error) {
        res.status(200).json({ massage: "add dishes failed", error });

    }
}

const getFoodType = async (req, res) => {
    try {
        FoodType.find({}, (error, result)=>{
            if (error) throw error;
            res.status(200).json({ massage: "get all success", data:result})
        })
    }
    catch(error) {
        res.status(500).json({ massage: "get all failed", error })

    }
}

const getFoodTypeById = async (req, res) => {
    try {
        FoodType.findById(req.params.id, (error, result)=> {
            if (error) throw error;
            res.status(200).json({ massage: "get foodType by id success", data: result })
        })
    }
    catch(error) {
        res.status(500).json({ massage: "get foodType by id failed", error })

    }
}

module.exports = { createFoodType, addDishes, getFoodType, getFoodTypeById }