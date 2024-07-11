import {createAction, createReducer} from '@reduxjs/toolkit';

const INCREMENT_NUM = 'INCREMENT_NUM'
const DECREMENT_NUM = 'DECREMENT_NUM'
const RESET_NUM = 'RESET_NUM'

const initialState = {
    num: 0,
}


export const increamentNum = createAction(INCREMENT_NUM);
export const dicreamentNum = createAction(DECREMENT_NUM);
export const resetNum = createAction(RESET_NUM);


export default createReducer(initialState,(builder)=>{
    builder
    .addCase(INCREMENT_NUM, (state, action)=>{
        if (state.num < 5) state.num = state.num +1
    })
    .addCase(DECREMENT_NUM, (state)=>{
        if (state.num > 0 ) state.num = state.num -1
    })
    .addCase(RESET_NUM, (state)=>{
         state.num = 0
    })
})