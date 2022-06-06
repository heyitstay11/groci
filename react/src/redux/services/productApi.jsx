import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl : import.meta.env.VITE_SERVER_URL }),
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
        editProduct: builder.mutation({
            query: ({ product, token }) => ({
                
            })
        }),
    }),
});

export const { useProductsQuery, useProductQuery, useAddProductMutation } = productApi;