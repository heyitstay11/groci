import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:5000' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        products: builder.query({
            query: () => '/products',
            providesTags: ['Product']
        }),
        product: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: ({ product, token }) => ({
                url: '/products/create',
                method: 'POST',
                body: product,
                headers: {
                    'x-auth-token': token
                }
            }),
            invalidatesTags: ['Product']
        }),
    }),
});

export const { useProductsQuery, useProductQuery, useAddProductMutation } = productApi;