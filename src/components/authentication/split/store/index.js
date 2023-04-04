import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  isRegistered: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.isRegistered = true;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.isRegistered = false;
      state.error = action.payload
    },
    initialAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isRegistered = false;
      state.error = null;
    }
  },
});

export const { loginSuccess, loginFailure, logout, registerFailure, registerSuccess, initialAuth } = authSlice.actions;

export const login = (user) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/login', user)
    if (response.data.success) {
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginFailure(response.data));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logoutAction = () => async (dispacth) => {
  try {
    dispacth(logout())
  } catch (error) {

  }
}

export const registerAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/signup', userData)
    if (response.data.success) {
      dispatch(registerSuccess());
      toast.success(`Registered Success`, {
        theme: 'colored'
      });
    } else {
      dispatch(registerFailure(response.data));
      toast.error(response.data.msg, {
        theme: 'colored'
      });
    }
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
}

export const initialAuthData = () => async (dispatch) => {
  try {
    dispatch(initialAuth())
  } catch (error) {

  }
}

export default authSlice.reducer;
