const addDishBySize = (array, size) => {
    return array.map(dishSize => dishSize.size === size ? { ...dishSize, items: dishSize.items += 1 } : dishSize);
}
const deleteDishBySize = (array, size) => {
    debugger
    return array.map(dishSize => dishSize.size === size ? { ...dishSize, items: dishSize.items -= 1 } : dishSize);
}
const sumItemsAndPrice = (array) => {
    let items = 0;
    let price = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].size.length; j++) {
            if (array[i].size[j].items > 0) {
                items += array[i].size[j].items;
                price = price + array[i].size[j].price * array[i].size[j].items;
            }
        }
    }
    return { items, price }
}

export const initialState = { summary: {}, dishes: [] };
export const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case 'addDish':
            const dishIndex = state.dishes.findIndex(dish => dish._id === action.payload.dish._id);
            if (dishIndex > -1) {
                const dishSize = addDishBySize(state.dishes[dishIndex].size, action.payload.size)
                return {
                    ...state, dishes: state.dishes.map(dish => dish._id === action.payload.dish._id ? { ...dish, size: dishSize } : dish),
                    summary: sumItemsAndPrice(state.dishes)
                }
            }
            let newState = {
                ...state, dishes: [...state.dishes, {
                    ...action.payload.dish, size: addDishBySize(action.payload.dish.size, action.payload.size)
                }]};
            return { 
                ...state, dishes : newState.dishes,
                summary: sumItemsAndPrice(newState.dishes)
                 }
        case 'removeDish':
            const deleteIndex = state.dishes.findIndex(dish => dish._id === action.payload.dish._id);

            const dishSize = deleteDishBySize(state.dishes[deleteIndex].size, action.payload.size);
            if (dishSize.filter(size=> size.items > 0).length === 0){
                return {
                    ...state, dishes: state.dishes.filter(dish => dish._id !== action.payload.dish._id),
                    summary: sumItemsAndPrice(dishSize.filter(size => size.items > 0))
                }
            }
            if (deleteIndex > -1) {
                return {
                    ...state, dishes: state.dishes.map(dish => dish._id === action.payload.dish._id ? { ...dish, size: dishSize } : dish),
                    summary: sumItemsAndPrice(state.dishes)
                }
            }
            return { 
                ...state, dishes: state.dishes.filter(dish => dish._id !== action.payload._id),
                summary: sumItemsAndPrice(dishSize.filter(size => size.items > 0))
                 }
        default:
            return state
    }
}

