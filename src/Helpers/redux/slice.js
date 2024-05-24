import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: {
        isFetching: false,
    },
    user: {
        name: "",
        uniqueId: ""
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsFetching: (state) => {
            state.state.isFetching = true;
        },
        userIsFetched: (state) => {
            state.isAuthenticated = true;
        },
        updateUser: (state, action) => {
          state.user = {
            name: action.payload.user.name,
            uniqueId: action.payload.user.uniqueId,
          }
        }
    },
});

export const { setIsFetching, userIsFetched, updateUser } = userSlice.actions;

export default userSlice.reducer;
