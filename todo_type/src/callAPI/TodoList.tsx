import React from 'react'
import { Todo } from '../interface'
import "../App.css"
interface Props{
    list:Todo[],
    toggleItem:(id:string|number)=> void
    deleteItem:(id:string|number)=> void
    handleClick:(data:boolean)=>void
    handleEdit:(id:string|number)=> void
}

const TodoList:React.FC<Props> = (props) => {
    const {list,toggleItem,deleteItem,handleClick,handleEdit}=props

    const handleToggle =(id:number|string)=>{
        toggleItem(id)
    }
    const handleDelete=(id:number|string)=>{
        deleteItem(id)
    }
    const handeEdit=(id:number|string)=>{
        handleClick(true)
        handleEdit(id)
    }
  return (
    <div>
        {list.map((item:any)=>{
            return (
                <div key={item.id}>
                <h1
                 className={item.completed?"active":""}
                 onClick={()=>handleToggle(item.id)}
                 >
                    {item.title}
                    </h1>
                    <button onClick={()=> handleDelete(item.id)}>Xoa</button>
                    <button onClick={()=>handeEdit(item.id)}>Edit</button>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList