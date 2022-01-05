const basketReducer = (state={}, action) => {
    switch(action.type){
        case "ADD_TO_BASKET": 
        return {
            ...state,
            [action.payload]:1
        };
            
        case "INCREMENT":
            state[action.payload] = state[action.payload]+1;
            return{
                ...state
            };

        case "DECREMENT":
            if (state[action.payload]<=1) {
                delete state[action.payload];
                return{
                    ...state
                }
            }
            else{
            state[action.payload] = state[action.payload]-1;
            return{
                ...state
            }}
        default:
            return state;
    }
}

export default basketReducer;