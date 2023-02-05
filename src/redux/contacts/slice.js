import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOut } from 'redux/auth/auth-operations';
import { fetchContacts, addContact, removeContact } from "./operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(removeContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })

      .addCase(logOut.fulfilled,(state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          removeContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          removeContact.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          removeContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;