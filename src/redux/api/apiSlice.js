import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jwlatadmin.com' }),
    endpoints: (builder) => ({
        getTours: builder.query({
            query: () => '/api/tours'
        }),
        getAllCountry: builder.query({
            query: () => '/api/countries/list'
        }),
        getCitiesByCountry: builder.query({
            query: ({ countryId }) => `/api/cities/cities-by-country/${countryId}`
        }),
        createUser: builder.mutation({
            query: ({ data }) => ({
                url: '/api/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        userLogIn: builder.mutation({
            query: ({ data }) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        getAllTourList: builder.query({
            query: ({ countryId, cityId, sortBy, categoryIds, minPrice, MaxPrice }) => `/api/tours/list?category_id=&city_id=${cityId}&category_ids=[${categoryIds}]&country_id=${countryId}&min_price=${minPrice}&max_price=${MaxPrice}&sort_by=${sortBy}`,
        }),
        getSingleTour: builder.query({
            query: ({ tourId }) => `/api/tours/${tourId}`,
        }),
        getCategories: builder.query({
            query: () => '/api/categories/list',
        }),
    })
})

export const { useGetToursQuery, useGetAllCountryQuery, useGetCitiesByCountryQuery, useGetAllTourListQuery, useGetSingleTourQuery, useGetCategoriesQuery, useCreateUserMutation, useUserLogInMutation } = api;
export default api;