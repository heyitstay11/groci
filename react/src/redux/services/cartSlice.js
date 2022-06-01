import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState: {
        products: [],
        total_price : 0,
        quantity: 0,
    },
    reducers : {
        setCart: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.total_quantity;
            state.total_price =  action.payload.total_price;
        },
        addProduct: (state, action) => {
            let count;
            const findIndex = state.products.findIndex(product => product._id === action.payload._id);
            if(findIndex === -1){
                state.products.push(action.payload);
                count =  action.payload.count
            }else{
                const countDiff =  action.payload.count - state.products[findIndex].count;
                state.products[findIndex].count = action.payload.count;
                count = countDiff
            }
            state.quantity += count;
            state.total_price += action.payload.price * count;
        },
        remove: (state, action) => {
            const findIndex = state.products.findIndex(product => product._id === action.payload);
            state.quantity -= state.products[findIndex].count;
            state.total_price -= state.products[findIndex].price * state.products[findIndex].count;
            state.products = [...state.products.slice(0, findIndex), ...state.products.slice(findIndex + 1)];
        },
        reset: (state) => {
            console.log('reset');
            state.products = [];
            state.total_price = 0;
            state.quantity = 0;
        },
    },
});

export const { setCart, addProduct, reset, remove } = cartSlice.actions;