import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './services/authSlice';
import { productApi } from './services/productApi';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware),
})
