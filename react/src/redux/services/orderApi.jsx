import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:5000' }),
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

export const {  useOrderQuery, useAllOrdersQuery } = orderApi;