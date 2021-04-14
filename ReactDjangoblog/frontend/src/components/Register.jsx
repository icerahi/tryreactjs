import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'
const Register = () => {
    const [username, setusername] = useState(null)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [password2, setpassword2] = useState(null)
    const history = useHistory()

    const registernow=()=>{
        if (password === password2){
            Axios({
                method:'POST',
                url:'http://localhost:8000/api/user/register/',
                data:{
                    'username':username,
                    'email':email,
                    'password':password,
                }
            })
            .then(response => {
                alert('User Registered Successfully!')
                history.push('/login')
            })
            .catch(e => alert("can't response now,please try later!"))

        }
        else{
            alert("Password not match!!")
        }
    }

    return (
        <div className="container">
       <div className="row justify-content-center">

<div className="col-md-6 mt-5">

 
<div className="card">
    <p className="lead text-center">Register Here</p>
    <div className="media card-body shadow-lg ">
   <div className="media-body">
       
           <input onChange={e=> setusername(e.target.value)} type="text" className="form-control" placeholder="Username"/> <br/>
           <input onChange={e=> setemail(e.target.value)} type="email" className="form-control" placeholder="Email"/> <br/>
           <input onChange={e=> setpassword(e.target.value)} type="password" className="form-control" placeholder="Password"/><br/>
           <input onChange={e=> setpassword2(e.target.value)} type="password" className="form-control" placeholder="Confirm Password"/><br/>
           <button class="btn btn-success" onClick={registernow}>Register</button>
      
  </div>
</div>
 </div>

 </div>

</div>
    </div>
    )
}

export default Register
