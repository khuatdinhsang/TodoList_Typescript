import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Todo } from '../interface'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const Api = () => {
    const [list,setList]=useState<Todo[]>([])
    const [isOpened, setOpened]=useState<boolean>(false)
    const [todo,setTodo]=useState<string>('')
    const [isChecked,setChecked]=useState<boolean>(false)
    const [id,setId]=useState<string|number>('')
    useEffect(()=>{
        const getTodo= async ()=>{
            const res=await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
           setList(res.data)
        }
        getTodo()
    },[])
    const handleToggle =()=>{
        setOpened(!isOpened)
    }
    const handleSet =(e:any)=>{
        setTodo(e.target.value)
    }
    const toggleItem=(id:number|string)=>{
        const newList=list.map((item)=> item.id===id ?{...item,completed:!item.completed} :item)
        setList(newList)
    }
    const deleteItem=(id:number|string)=>{
        const newList=list.filter((item)=> item.id!==id )
        setList(newList)
    }

    const handleClick=(data:boolean)=>{
        setChecked(data)
    }
    
    const handleAdd=()=>{
        if (isChecked){
            const newList=list.map(item=> item.id===id?{...item, title:todo}:item)
           setList(newList)
           setTodo('')
            setChecked(false)
        } else{
            const newList=[...list,{id:uuidv4(), title:todo, completed:false}];
            setList(newList)
            setTodo('')
        }
        }
    const handleEdit=(id:number|string)=>{
        const item=list.find((item)=>item.id===id)
        if(item){
            setTodo(item?.title)
        }
        setId(id)

    }   
    return (
    <>

    <input type="text" value={todo} onChange={handleSet}/>
    <button onClick={handleAdd}>ADD</button>
    <button onClick={handleToggle}>Toggle</button>
   {isOpened &&( <TodoList handleEdit={handleEdit} handleClick ={handleClick}deleteItem ={deleteItem}toggleItem={toggleItem}list={list} />)}
    
    </>
  )
}

export default Api