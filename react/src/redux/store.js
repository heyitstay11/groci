import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './services/authSlice';
import { cartSlice } from './services/cartSlice';
import { productApi } from './services/productApi';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware),
})
