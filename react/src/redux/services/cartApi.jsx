import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:5000' }),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        cart: builder.query({
            query: (token) => ({
                url: '/cart',
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Cart']
        }),
        createCart: builder.mutation({
            query: ({ token }) => ({
                url: '/cart/create',
                method: 'POST',
                headers: {
                    'x-auth-token': token
                }
            }),
            invalidatesTags: ['Cart']
        }),
        updateCart: builder.mutation({
            query: ({ token, cart }) => ({
                url: '/cart/',
                method: 'PUT',
                body: cart,
                headers: {
                    'x-auth-token': token
                }
            }),
            invalidatesTags: ['Cart']
        }),
        deleteCart: builder.mutation({
            query: ({ token }) => ({
                url: '/cart/',
                method: 'DELETE',
                headers: {
                    'x-auth-token': token
                }
            }),
            invalidatesTags: ['Cart']
        })
    }),
});

export const {  useCartQuery, useCreateCartMutation, useUpdateCartMutation, useDeleteCartMutation } = cartApi;