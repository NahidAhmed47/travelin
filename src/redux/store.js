import { configureStore } from '@reduxjs/toolkit'
import toursSlice from './features/toursSlice/toursSlice'
import api from './api/apiSlice'
import userSlice from './features/user/userSlice'
import searchSlice from './features/search/searchSlice'

const store = configureStore({
    reducer: {
        toursList: toursSlice,
        user: userSlice,
        search: searchSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export default store

