import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Todo from './todo'
import Home from './home'

const App =()=>{
  const [getTodo, setTodo] = useState(null)
  const [reload, setreload] = useState(null)
  useEffect(()=>{
    const todolist = async()=>{
      await Axios({
        method:'GET',
        url:'http://localhost:8000',
      })
      .then(response => setTodo(response.data))
    }
    todolist()
  },[reload])

  return (
    <>
    <BrowserRouter>
    <ul>
      <li> <Link to='/todo'>TodoList</Link></li>
      <li><Link to='/'>Home</Link></li>
    </ul>

    <Switch>
      <Route exact path='/todo'>
        <Todo todo={getTodo} reload={setreload}/>
      </Route>

      <Route exact path='/'> <Home/> </Route>
    </Switch>
    </BrowserRouter>
    
    </>
  )
}

export default App