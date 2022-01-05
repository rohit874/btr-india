export const AddToBasket = (id) =>{
    return {
        type:"ADD_TO_BASKET",
        payload: id
    }
}

export const IncreseItem = (id) =>{
    return {
        type:"INCREMENT",
        payload: id
    }
}

export const DecreaseItem = (id) =>{
    return {
        type:"DECREMENT",
        payload: id
    }
}