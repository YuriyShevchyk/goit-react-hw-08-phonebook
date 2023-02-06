import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupUser = createAsyncThunk(
  'user/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthToken(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthToken(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthToken();
    } catch (error) {
      return rejectWithValue;
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (data, thunkApi) => {
    const state = thunkApi.getState();

    if (!state.auth.token) {
      return thunkApi.rejectWithValue('No valid token');
    }

    setAuthToken(state.auth.token);

    try {
      const res = await axios.get('users/current');

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue;
    }
  }
);