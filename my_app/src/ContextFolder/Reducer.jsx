export const cartReducer=(state,action)=>{
    switch (action.type) {
        case 'SET_PRODUCTS':
            return{
                ...state,
                products:action.payload
            }
        case 'ADD_TO_CART':
            if (state.cart.some((item) => item.id === action.payload.id)) {
                // If the item already exists in the cart, return the current state
                return state;
              } else {
                // If the item is not in the cart, add it to the cart
                return {
                  ...state,
                  cart: [...state.cart, {...action.payload,qty:1}],
                };
              }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
              };

    
        default:
            return state;
    }
}