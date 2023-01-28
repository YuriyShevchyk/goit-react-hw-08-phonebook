import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance} from 'redux/auth/auth-operation';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await instance.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addCOntact',
    async (data, thunkAPI) => {
        try {
            const response = await instance.post('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (contactsId, thunkAPI) => {
      try {
        const response = await instance.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );