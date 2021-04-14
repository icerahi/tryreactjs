import React,{useContext} from 'react'
import { useStateValue } from './state/StateProvider'

const Todo = () => {
    const [{todo},dispatch] = useStateValue()
    return (
        <div>
            <h1>Todo -{todo}</h1>
            <hr/>
         
            <button onClick={()=> dispatch({type:'add_todo',value:'send from todo'})}>send</button>
        </div>
    )
}

export default Todo
