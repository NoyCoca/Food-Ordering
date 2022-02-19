import { addDishBySize, deleteDishBySize, sumItemsAndPrice } from "./helpers/helpers";

export const initialState = { summary: {}, dishes: [] };
export const reducer = (state, action) => {
    let newState ={}
    const dishIndex = state.dishes.findIndex(dish => dish._id === action.payload.dish._id);

    debugger
    switch (action.type) {
        case 'addDish':
            if (dishIndex > -1) {
                const dishSize = addDishBySize(state.dishes[dishIndex].size, action.payload.size)
                return {
                    ...state, dishes: state.dishes.map(dish => dish._id === action.payload.dish._id ? { ...dish, size: dishSize } : dish),
                    summary: sumItemsAndPrice(state.dishes)
                }
            }
            
             newState = {
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
                newState = {
                    ...state, dishes: state.dishes.filter(dish => dish._id !== action.payload.dish._id),
                }
                return {
                    ...state, dishes: newState.dishes,
                    summary: sumItemsAndPrice(newState.dishes)
                }
            }
            
            if (deleteIndex > -1) {
                newState = {
                    ...state, dishes: state.dishes.map(dish => dish._id === action.payload.dish._id ? { ...dish, size: dishSize } : dish),
                }
                return {
                    ...state, dishes:newState.dishes,
                    summary: sumItemsAndPrice(state.dishes)

                }
            }
            return { 
                ...state, dishes: state.dishes.filter(dish => dish._id !== action.payload._id),
                summary: sumItemsAndPrice(dishSize.filter(size => size.items > 0))
                 }
        default:
            return state;
    }
}

