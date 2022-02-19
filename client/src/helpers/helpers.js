export const addDishBySize = (array, size) => {
    return array.map(dishSize => dishSize.size === size ? { ...dishSize, items: dishSize.items += 1 } : dishSize);
}

export const deleteDishBySize = (array, size) => {
    return array.map(dishSize => dishSize.size === size ? { ...dishSize, items: dishSize.items -= 1 } : dishSize);
}

export const sumItemsAndPrice = (array) => {
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