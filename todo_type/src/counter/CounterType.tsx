import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../action";
import HandleClick from "./HandleClick";
export const CounterType =()=>{
        const counter=useSelector((state :any) =>state.counterRedux)
    const dispatch=useDispatch()
        const handleIncrease =()=>{
                dispatch(increase({data:3}))
        }
        const handleDecrease =()=>{
            dispatch(decrease({data:100}))
        }
    return (
        <div>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <HandleClick handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
        </div>
    )
}
