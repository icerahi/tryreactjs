import React ,{useContext,}from 'react'
import { sendName } from './ContextApi'


const Home=()=>{
    const data = useContext(sendName)
    return (
        <>
        <h1>Home Data == {data?.state?.home}</h1>
        <hr/>
        <button onClick={()=>data.dispatch({type:'home',value:'this is home'})}>load</button>
        <button onClick={()=>data.dispatch({type:'reset',value:'home'})}>reset</button>
        </>
    )
}

export default Home