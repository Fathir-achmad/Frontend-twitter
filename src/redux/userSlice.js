import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        id: 0,
        username: "",
        email: "",
        phone: "",
        profilePic: ""
    },
    };

    export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.id = action.payload.id;
            state.value.username = action.payload.username;
            state.value.email = action.payload.email;
            state.value.profilePic = action.payload.profilePic;
        },
        logout: (state) => {
            state.value.id = 0;
            state.value.username = "";
            state.value.email = "";
            state.value.profilePic = "";
        },
    },
});

export const { login , logout} = userSlice.actions;

export default userSlice.reducer;