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
    })
})

export const { useGetToursQuery, useGetAllCountryQuery } = api;
export default api;