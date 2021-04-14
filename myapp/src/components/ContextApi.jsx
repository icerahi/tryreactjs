import React, { useReducer, useState } from 'react'
import About from './about'
import Home from './home'
import Work from './work'



const initialState={
    home:null,
    about:null,
    work:null,
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'home':
            return {...state,home:action.value}
        case 'about':
            return {...state,about:action.value}
        case 'work':
            return {...state,about:action.value}
        case 'reset':
            console.log(state[`${action.value}`])
            
            return (state!==null?(state[`${action.value}`]=null,{...state}):(state))
        default:
            return state
    }
}

 
export const sendName = React.createContext()
 
const ContextApi = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
           
            <sendName.Provider value={{state:state,dispatch:dispatch}}>
                <About/>
                <Home/>
                <Work/>
            </sendName.Provider>
        </div>
    )
}

export default ContextApi
