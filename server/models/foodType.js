const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodType = new Schema({
    foodType: {
        type: String,
        required: true
    },
    img:{
        type:String
    },
    dishes: [
        {
            dishesName: {
                type: String,
                required: true
            },
            dishesImg: {
                type: String,
            },
            size:[{
                size:{
                    type:String,
                },
                price:{
                    type:String
                }
            }]
        }
    ]
})
const FoodType = mongoose.model("foodType", foodType);
module.exports = FoodType;

