import React, { useState } from 'react'
import Axios from 'axios'

const Login = () => {
    const [username,setUsername]=useState(null)
    const [password,setPassword]=useState(null)

    const loginnow = async()=>{
        await Axios({
            method:'post',
            url:"http://localhost:8000/api/user/login/",
            data:{
                'username':username,
                'password':password,
            }
        })
        .then(response => {
             
            window.localStorage.setItem('token',response.data['token'])
            window.location="/"
            
        })
        .catch(e=> alert('Your Username And Password is Invalid'))
    }
    return (
        <div className="container">
       <div className="row justify-content-center">

<div className="col-md-6 mt-5">

 
<div className="card">
    <p className="lead text-center">Login Here</p>
    <div className="media card-body shadow-lg ">
   <div className="media-body text-center">
       
           <input onChange={(e)=>setUsername(e.target.value)} type="text" className="form-control" placeholder="Username"/> <br/>
           <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Password"/> <br/>
 
           <button type="submit" onClick={loginnow} class="btn btn-success">Login</button>
          
  </div>
</div>
 </div>

 </div>

</div>
    </div>
    )
}

export default Login
