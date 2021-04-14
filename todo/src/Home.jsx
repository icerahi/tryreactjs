import React from 'react'
import { useStateValue } from './state/StateProvider'

const Home = () => {
    const [{home},depatch] = useStateValue()
    return (
        <div>
            <h1>Home - {home}</h1>
            <button onClick={()=>depatch({type:'add_home',value:'Home loaded'})}>Load</button>
        </div>
    )
}

export default Home
