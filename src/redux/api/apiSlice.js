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
    })
})

export const { useGetToursQuery, useGetAllCountryQuery, useGetCitiesByCountryQuery, useCreateUserMutation, useUserLogInMutation } = api;
export default api;