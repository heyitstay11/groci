import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState: {
        products: [],
        total_price : 0,
        quantity: 0,
    },
    reducers : {
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
        reset: (state) => {
            state.products = [];
            state.total_price = 0;
            state.quantity = 0;
        },
        remove: (state, action) => {
            const findIndex = state.products.findIndex(product => product._id === action.payload);
            state.quantity -= state.products[findIndex].count;
            state.total_price -= state.products[findIndex].price * state.products[findIndex].count;
            state.products = [...state.products.slice(0, findIndex), ...state.products.slice(findIndex + 1)];
        }
    },
});

export const { addProduct, reset, remove } = cartSlice.actions;