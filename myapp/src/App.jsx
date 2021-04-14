import React, { useEffect, useState,useReducer } from 'react'
import About from './components/about'
import Axios from 'axios'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Home from './components/home'
import Work from './components/work'
import Todo from './components/todo'
import Reducer from './components/Reducer'
import ContextApi from './components/ContextApi'

 
const App=()=>{
   

  return (
    <>
     <ContextApi/>
    </>
  )
}
export default App
// const App=()=>{
//   const [number1,setNumber1]=useState(0);
//   const [number2,setNumber2]=useState(0);
//   const [result,setResult]=useState(0);

//   const addnumber =()=>{
//     const resultdata = parseInt(number1)+parseInt(number2)
//     setResult(resultdata)
//   }
//   return (
//     <>
//         <input onChange={(e) => setNumber1(e.target.value)} type="number"/>
//         <input onChange={(e)=> setNumber2(e.target.value)} type="number"/>
//         <button onClick={addnumber} >Add</button>
//         <h1>{number1}</h1>
//         <h1>{number2}</h1> 
//         <h1>result: {result}</h1> 
       
//    </>
//   )
// }

// export default App

// const App=()=>{
//   const [number,setNumber]=useState(0)
 
//   return(
//     <>
//     <button onClick={()=>setNumber(number-1)}>-</button>
//     <h1>{number}</h1>
//     <button onClick={()=>setNumber(number+1)} >+</button>
//     </>
//   )
// }
// export default App;


// const App=()=>{
//   useEffect(()=>{
//        const request=async()=>{
//         Axios({
//           method:'get',
//           url:'https://jsonplaceholder.typicode.com/users'
//         }).then(response=> console.log(response.data))
//        }
//     request();
//   },[])
  
//   return(
//     <>
//       <About name='a' work='b' city='dhaka'/>
//       <About name='rahi' work='student' city='Sirajganj'/>
     
//     </>
//   )
// }
// export default App;