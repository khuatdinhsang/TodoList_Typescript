import { PayloadAction } from '@reduxjs/toolkit';

export interface counter{
    data:number
}
const initState:number =100

export const counterRedux = (state = initState, action:PayloadAction<counter>) => {
    switch (action.type) {
        case "UP":
            return state + action.payload.data;
        case "DOWN":
            return state - action.payload.data;
        default:
            return state;
    }
};

