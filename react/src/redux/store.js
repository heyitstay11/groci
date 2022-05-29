import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './services/authSlice';
import { cartSlice } from './services/cartSlice';
import { productApi } from './services/productApi';
import { cartApi } from './services/cartApi';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware).concat(cartApi.middleware),
});
