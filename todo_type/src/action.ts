import { counter } from './reducer';
export const increase = (data :counter)=>{
    return {
        type:'UP',
        payload:data
    }
}
export const decrease = (data :counter)=>{
    return {
        type:'DOWN',
        payload:data
    }
}