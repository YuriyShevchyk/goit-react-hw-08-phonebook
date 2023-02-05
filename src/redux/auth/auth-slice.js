import { createSlice, isAnyOf  } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, refreshUser} from 'redux/auth/auth-operations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
      builder
        .addCase(logOut.fulfilled, state => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        })
        .addMatcher(
          isAnyOf(signUp.fulfilled, logIn.fulfilled),
          (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
          }
        ),
});

export const authReducer = authSlice.reducer;