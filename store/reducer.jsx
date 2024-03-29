export const initialState = {
    basket: [],
    user: null
}

// export const getBasketTotal = (basket) => 
//     basket?.reduce( (amount, item) => item.price + amount, 0 );

export const getBasketTotal = (basket) => (
    basket?.reduce( (amount, item) => Number(item.price) + amount, 0 )
);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            // return [...state, {basket: [...state.basket, action.item]}]
            // return state;
        
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id),
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;