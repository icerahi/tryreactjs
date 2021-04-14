import React,{useContext} from 'react'
import { sendName } from './ContextApi'

const About=(props)=>{
  const data = useContext(sendName)
    return (
    <div>
        <h1>About - {data?.state?.home} ({data?.state?.about}) <button onClick={()=> data.dispatch({type:'about',value:'this is about'})}>load</button> </h1>
        <button onClick={()=> data.dispatch()}>Reset </button>
        <hr/>
      </div>
    )
}

export default About