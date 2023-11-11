import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toursSlice = createSlice({
    name: "toursList",
    initialState,
    reducers: {
        setTours: (state, action) => {
            return action.payload;
        }
    }
});

export const { setTours } = toursSlice.actions;
export default toursSlice.reducer;
