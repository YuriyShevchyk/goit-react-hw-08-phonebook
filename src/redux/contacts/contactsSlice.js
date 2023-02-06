import { createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    },

    [fetchContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },

    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [addContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
        error: null,
      };
    },

    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [deleteContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [deleteContact.fulfilled]: (state, action) => {
      return {
        items: state.items.filter(({ id }) => id !== action.payload.id),
        isLoading: false,
        error: null,
      };
    },

    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [editContact.fulfilled]: (state, action) => {
      state.items.map(item => {
        if (item.id === action.payload.data.id) {
          item.name = action.payload.data.name;
          item.number = action.payload.data.number;
        }
        return item;
      });
    },
  },
});