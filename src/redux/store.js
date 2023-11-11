import { configureStore } from '@reduxjs/toolkit'
import toursSlice from './features/toursSlice/toursSlice'
import api from './api/apiSlice'

const store = configureStore({
    reducer: {
        toursList: toursSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export default store

