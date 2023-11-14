import { createSlice } from "@reduxjs/toolkit";

const lngModeSlice = createSlice({
    name: 'lngMode',
    initialState: {
        lngMode: 'en',
    },
    reducers: {
        setLngMode: (state, action) => {
            state.lngMode = action.payload;
        },
    }
})

export const { setLngMode } = lngModeSlice.actions;
export default lngModeSlice.reducer;