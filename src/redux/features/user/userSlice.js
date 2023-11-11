import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    // name: "",
    // email: "",
    // isLoading: true,
    // isError: false,
    // error: "",
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