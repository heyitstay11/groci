import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:5000' }),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
      
    }),
});

export const {  } = cartApi;