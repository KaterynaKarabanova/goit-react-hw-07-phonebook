import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.items.findIndex(task => task.id === action.payload);
        state.items.splice(index, 1);
      },
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const contactsReducer = contactsSlice.reducer;
export const getContactsItems = state => state.contacts.items;
