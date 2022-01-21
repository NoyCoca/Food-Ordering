const express = require("express");
const { createFoodType, addDishes, getFoodType, getFoodTypeById } = require("../controllers/foodTypeController");
const router = express.Router();

router.post('/createFoodType', createFoodType);
router.post('/addDishes/:id', addDishes);
router.get('/getFoodType', getFoodType);
router.get('/getFoodTypeById/:id', getFoodTypeById);

module.exports = router;