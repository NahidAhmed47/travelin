import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// get lng mode from local storage

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jwlatadmin.com' }),
    endpoints: (builder) => ({
        getTours: builder.query({
            query: () => ({
                url: '/api/tours',
                headers: {
                    lang: `${localStorage.getItem('lngMode')}`,
                }
            })
        }),
        getAllCountry: builder.query({
            query: () => '/api/countries/list'
        }),
        getCitiesByCountry: builder.query({
            query: ({ countryId }) => ({
                url: `/api/cities/cities-by-country/${countryId}`,
                headers: {
                    lang: `${localStorage.getItem('lngMode')}`,
                }
            })
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
            query: ({ countryId, cityId, sortBy, categoryIds, minPrice, maxPrice }) => ({
                url: `/api/tours/list?category_id=&city_id=${cityId}&category_ids=[${categoryIds}]&country_id=${countryId}&min_price=${minPrice}&max_price=${maxPrice}&sort_by=${sortBy}`,
                headers: {
                    lang: `${localStorage.getItem('lngMode')}`,
                }
            })
        }),
        getSingleTour: builder.query({
            query: ({ tourId }) => ({
                url: `/api/tours/${tourId}`,
                headers: {
                    lang: `${localStorage.getItem('lngMode')}`,
                }
            })
        }),
        getCategories: builder.query({
            query: () => ({
                url: '/api/categories/list',
                headers: {
                    lang: `${localStorage.getItem('lngMode')}`,
                }
            })
        }),
        addCart: builder.mutation({
            query: ({ data, token }) => ({
                url: '/api/carts/add',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
                body: data,
            }),
        }),
    })
})

export const { useGetToursQuery, useGetAllCountryQuery, useGetCitiesByCountryQuery, useGetAllTourListQuery, useGetSingleTourQuery, useGetCategoriesQuery, useCreateUserMutation, useUserLogInMutation, useAddCartMutation } = api;
export default api;