import { createSlice } from "@reduxjs/toolkit";
import { logOut } from 'redux/auth/auth-operation';
import { fetchContacts, addContact, removeContact } from "./operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
          },
          [addContact.fulfilled](state, action) {
            state.items.push(action.payload);
          },
          [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
          [removeContact.pending](state) {
            state.isLoading = true;
          },
          [removeContact.fulfilled](state, action) {
            state.isLoading = false;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [removeContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
          [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
          },
    },
});

export const contactsReducer = contactsSlice.reducer;