
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reduser from './reduser'; 
import cars from './cars'; 
import namesReducer from './namesSlice'; 

const rootReducer = combineReducers({
  reduser,
  cars,
  names: namesReducer 
});

export const store = configureStore({
  reducer: rootReducer,
});
