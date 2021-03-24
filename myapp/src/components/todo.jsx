import Axios from 'axios'
import React, { useEffect,useState } from 'react'



const Todo=()=>{
    const [todo,getTodo]=useState(null)
    useEffect(()=>{
        const todolist=async()=>{
            await Axios({
                method:'GET',
                url:'http://localhost:8000/'

            })
            .then(response => getTodo(response.data))
        }
        todolist();
    },[])
    return(
        <div>
            <h1>TodoList</h1>
    <hr/>
        {
            todo !== null?(
               <div>
                   { todo.map((d,i) => 
                        (
                       <div key={i}>
                           <h1>{d.text}</h1>
                       </div>
                       )
                   )}
               </div>
            ):(<h1> No data</h1>)
        }
        </div>
    )
}

export default Todo 