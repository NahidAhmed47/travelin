import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    countryId: "",
    cityId: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setCountryId(state, action) {
            state.countryId = action.payload;
        },
        setCityId(state, action) {
            state.cityId = action.payload;
        },
    },
});

export const { setCountryId, setCityId } = searchSlice.actions;
export default searchSlice.reducer;