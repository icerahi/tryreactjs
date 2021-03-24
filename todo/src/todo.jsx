import React,{useState} from 'react'
import Axios from 'axios'
const Todo = (props)=>{
    const [data, setdata] = useState('')
    const [edit, setedit] = useState(false)
    const [editid, seteditid] = useState(null)

    const addDataTodo =async()=>{
            await Axios({
                method:'POST',
                url:'http://localhost:8000',
                data:{
                    'text':data,
                }
            })
            .then(response =>{
                console.log(response.data)
                props.reload(response.data)
                setdata('')
            } )
    }

    const todoDelete=async(id)=>{
            await Axios({
                method:'DELETE',
                url:`http://localhost:8000/${id}/`
            })
            .then(response =>{
                console.log('Delete Success Full')
                props.reload(response)
                 
            })
    }
    const editTodo=async(id)=>{
        seteditid(id)
        await Axios({
            method:'GET',
            url:`http://localhost:8000/${id}`,
        })
        .then(response=>{
            setdata(response.data['text'])
            setedit(true)
        })
    }

    const UpdateTodo=async(id)=>{
        await Axios({
            method:'PUT',
            url:`http://localhost:8000/${id}/`,
            data:{
                'text':data
            }
        })
        .then(response=>{
            setedit(false)
            setdata('')
            props.reload(response)
        })
    }
    return(
        <div> 
            <h1>TodoList</h1>
            <div>
                <input onChange={(e)=> setdata(e.target.value)} value={data} type="text"/>

                { edit?<button onClick={()=>UpdateTodo(editid)}>Update Todo</button>:<button onClick={addDataTodo}>Add Todo</button>}
              
                
            </div>
            <hr/>
            <>
            <h1>{data}</h1>
            { props.todo!== null ?(props.todo.map((d,i)=>(
                    <div key={i}>
                        <h4>{d.id}--{d.text}</h4>
                        <p>{ d.date}</p>

                        <button onClick={()=>editTodo(d.id)}>Edit</button>
                        <button onClick={()=>todoDelete(d.id)}>Delete</button>
                    </div>
                ))):(<h1>No Data</h1>) }
            </>
        </div>
    )
}

export default Todo