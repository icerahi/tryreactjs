import React, { useEffect,useState,useReducer } from 'react'
import Home from './Home'
import Todo from './Todo'

const initialState={
  home:null,
  todo:null,
}

const reducer=(state,action)=>{
  switch(action.type){
    case 'home':
      return {...state,home:action.value}

    case 'todo':
      return {...state,todo:action.value}
    
    default:
      return state
  }
}

export const sendData = React.createContext()
const App =()=>{
   
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <h1>main app component</h1>
    <h1>Home : {state.home}</h1>
    <h1>Todo : {state.todo}</h1>
    <hr/>
      <sendData.Provider value={{state:state,dispatch:dispatch}}>
        <Home/>
        <Todo/>
      </sendData.Provider>
    </>
  )
}

export default App