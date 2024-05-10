import  {createSlice} from '@reduxjs/toolkit';

const initialState = {

    state: {
        isFetching: false,
    },
    user:{
  name:"collins",
  isAuthenticated:true
},
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
        state.state.isFetching = true;
    },
    userIsFetched: (state) => {
      state.isAuthenticated = true;
    } 
  }  
});

export const {
      setIsFetching,
      userIsFetched
    } = userSlice.actions;


export default userSlice.reducer;