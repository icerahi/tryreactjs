import React,{createContext,useReducer,useContext} from 'react'

export const Context=createContext()

export const StateProvier = ({reducer,initialstate,children}) => {
    return (
        <Context.Provider value={useReducer(reducer,initialstate)}>
            {children}
        </Context.Provider>
    )
}


export const useStateValue=()=>useContext(Context)