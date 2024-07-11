import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  namesList: JSON.parse(localStorage.getItem('namesList')), 
};

const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.namesList = [...state.namesList, action.payload];
      localStorage.setItem('namesList', JSON.stringify(state.namesList)); 
    },
    removeName: (state, action) => {
      state.namesList = state.namesList.filter(name => name !== action.payload);
      localStorage.setItem('namesList', JSON.stringify(state.namesList)); 
    },
    loadNames: (state, action) => {
      state.namesList = action.payload;
    },
  },
});

export const { addName, removeName, loadNames } = namesSlice.actions;

export default namesSlice.reducer;
