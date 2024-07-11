import {createAction, createReducer} from '@reduxjs/toolkit';


const ADD_CAR = 'ADD_CAR'

const intitialState = {
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ],
}

export const addCar = createAction(ADD_CAR);

export default createReducer(intitialState, (builder) =>{
    builder
    .addCase(ADD_CAR, (state, action)=>{
        state.cars = [action.payload,...state.cars]
    })
})
