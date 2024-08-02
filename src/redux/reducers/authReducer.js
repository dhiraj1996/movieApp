import { createSlice } from '@reduxjs/toolkit';
// import { login, logout } from '../actions/authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    email: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
