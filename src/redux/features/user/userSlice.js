import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;