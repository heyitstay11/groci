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
        searchProduct: builder.query({
            query: (searchTerm) => `/products/search/${searchTerm}`,
            providesTags: ['Product'],
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
        updateProduct: builder.mutation({
            query: ({ product, token, id }) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: product,
                headers: {
                    'x-auth-token': token
                }
            }),
            invalidatesTags: ['Product']
        }),
    }),
});

export const { useProductsQuery, useProductQuery, useAddProductMutation, useUpdateProductMutation, useSearchProductQuery } = productApi;