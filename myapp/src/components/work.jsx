import React,{useContext} from 'react'
import { sendName } from './ContextApi'

const Work = () => {
    const data = useContext(sendName)
    return (
        <div>
            <h1>Work- <button onClick={()=> data.setNumber(10)}>add</button></h1>
            <h1>name :{data.name} {data.number}</h1>
        </div>
    )
}

export default Work
