import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl : import.meta.env.VITE_SERVER_URL }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        allOrders: builder.query({
            query: (token) => ({
                url: '/order',
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Order']
        }),
        pendingOrders: builder.query({
            query: (token) => ({
                url: '/order/pending',
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Order']
        }),
        order: builder.query({
            query: ({token, id}) => ({
                url: `/order/${id}`,
                headers: {
                    'x-auth-token': token
                }
            }),
            providesTags: ['Order']
        }),
    }),
});

export const {  useOrderQuery, useAllOrdersQuery, usePendingOrdersQuery } = orderApi;