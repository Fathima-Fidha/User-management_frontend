import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isAuthenticated: false },
  reducers: {
    authStart: (state) => ({ ...state, isLoading: true }),
    authSuccess: (state, action) => ({
      ...state,
      user: action.payload,
      isAuthenticated: true,
      isLoading: false,
    }),
    authFailure: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
    logout: (state) => ({ user: null, isAuthenticated: false }),
  },
});

export const { authStart, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;
