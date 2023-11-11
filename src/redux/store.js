import { configureStore } from '@reduxjs/toolkit'
import toursSlice from './features/toursSlice/toursSlice'

const store = configureStore({
    reducer: {
        toursList: toursSlice,
    }
})

export default store

