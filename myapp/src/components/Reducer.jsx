

import React,{useReducer,} from 'react'


const initialState={
    number1:0,
    number2:0,
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'inc_1':
            return {
                ...state,
                number1:state.number1+action.num1}
        case 'dec_1':
            return {
                ...state,
                number1:state.number1-action.num1 }

        case 'reset_1':
            return initialState

        case 'inc_2':
            return{...state,number2:state.number2+ action.num2}
        
        case "dec_2":
            return {...state, number2:state.number2- action.num2} 
        case 'reset_2':
            return initialState.number2
        
        default:
            return state
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Number1 :{state.number1}</h1>
            <button onClick={()=> dispatch({type:'inc_1',num1:2})}>inc</button>
            <button onClick={()=>dispatch({type:'dec_1',num1:2})}>dec</button>
            <button onClick={()=>dispatch('reset_1')}>reset</button>

            <h1>Number2 :{state.number2}</h1>
            <button onClick={()=> dispatch({type:'inc_2',num2:4})}>inc</button>
            <button onClick={()=>dispatch({type:'dec_2',num2:4})}>dec</button>
            <button onClick={()=>dispatch('reset_2')}>reset</button>
        </div>
    )
}

export default Reducer
