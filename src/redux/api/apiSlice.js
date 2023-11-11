import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jwlat.com' }),
    endpoints: (builder) => ({
        getTours: builder.query({
            query: () => '/api/tours'
        }),
        getAllCountry: builder.query({
            query: () => '/api/countries/list'
        }),
        getCitiesByCountry: builder.query({
            query: ({countryId}) => `/api/cities/cities-by-country/${countryId}`
        }),
    })
})

export const { useGetToursQuery, useGetAllCountryQuery, useGetCitiesByCountryQuery } = api;
export default api;