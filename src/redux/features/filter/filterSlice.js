import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryIds: [],
        minPrice: 0,
        maxPrice: "",
        sortBy: '',
    },
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryIds = [...state.categoryIds, action.payload];
        },
        removeCategoryId: (state, action) => {
            state.categoryIds = state.categoryIds.filter(id => id !== action.payload);
        },
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setReset: (state, action) => {
            state.categoryIds = action.payload.categoryIds;
            state.minPrice = action.payload.minPrice;
            state.maxPrice = action.payload.maxPrice;
            state.sortBy = action.payload.sortBy;
        }
    }
})

export const { setCategoryId, removeCategoryId, setSortBy, setMaxPrice, setMinPrice, setReset } = filterSlice.actions;
export default filterSlice.reducer;