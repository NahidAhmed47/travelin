import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "",
    email: "",
    isLoading: true,
    isError: false,
    error: "",
}

export const createUser = createAsyncThunk(
    'userSlice/createUser',
    async ({ data }) => {
        const res = await fetch('https://jwlat.com/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log(result);
        return ;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.error = "";
            state.name = "";
            state.email = "";
        });
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = "";
            state.name = payload.name;
            state.email = payload.email;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.name = "";
            state.email = "";
        });
    }
});

export default userSlice.reducer;