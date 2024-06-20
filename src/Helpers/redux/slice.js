import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: {
        isAuthenticated: false,
        isFetching: false
    },
    user: {
        name: "",
        uniqueId: "",
        isTeacher: false,
        isAdmin: false
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsFetching: (state) => {
            state.status.isFetching = true;
        },
        userIsFetched: (state) => {
            state.status.isFetching = false;
            state.status.isAuthenticated = true;
        },
        updateUser: (state, action) => {
          state.user = {
            name: action.payload.user.name,
            uniqueId: action.payload.user.uniqueId,
            isTeacher: action.payload.user.isTeacher,
            isAdmin: action.payload.user.isAdmin
          }
        },
        logoutStateUser: (state) => {
            state.status.isAuthenticated = false;
            state.user.name = "";
            state.user.uniqueId = "";
            state.user.isTeacher = false;
            state.user.isAdmin = false;
        }
    },
});

export const { setIsFetching, userIsFetched, updateUser, logoutStateUser } = userSlice.actions;
export default userSlice.reducer;