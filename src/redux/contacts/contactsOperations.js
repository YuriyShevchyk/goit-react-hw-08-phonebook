import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { contactsApi } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.addNewContact(data);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.deleteContactById(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, values }, thunkApi) => {
    try {
      const contact = await axios.patch(`/contacts/${id}`, values);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);