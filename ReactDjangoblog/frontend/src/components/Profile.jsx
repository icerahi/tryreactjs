
import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import { useStateValue } from '../state/StateProvier'
import Axios from 'axios'
const Profile = () => {

    const [{profile},dispatch]= useStateValue()
     
    const [Email, setEmail] = useState(profile?.user?.email)
    const [Image,setImage] = useState(profile?.image)
    const [Fullname,setFullname]=useState(profile?.fullname)

    const [EditMode, setEditMode] = useState(false)

    
    const UserUpdate= async()=>{
            await Axios({
                method:"POST",
                url:"http://localhost:8000/api/user/update/",
                data:{
                    'email':Email,
                },
                headers:{
                    Authorization:`token ${window.localStorage.getItem('token')}`
                }
            })
            .then(response =>{
                dispatch({type:'reload',value:response})
                UpdateImage()
                setEditMode(false)
                
            })
    }

    const UpdateImage= async()=>{
        let formfield = new FormData()
        formfield.append('image',Image)
       // formfield.append('user',profile?.id)
        formfield.append('fullname',Fullname)

        await Axios({
            method:'post',
            url:`http://localhost:8000/api/profile/update/`,
            data:formfield,
            headers:{
                Authorization:`token ${window.localStorage.getItem('token')}`
            }

        })
        .then(response => {
            console.log(response.data)
            dispatch({type:'reload',value:response})
        })

    }
    return (
        <div className= "container">
        <div className="row">

        <div className="col-md-4 mt-5 text-center">
        <img className="rounded-circle img-thumbnail shadow border-white w-50" src={`http://localhost:8000${profile?.image}`} alt=""/>  <br/>
               { EditMode?(
                   <div>

                <input onChange={(e)=> setImage(e.target.files[0])} className="form-control" type="file"/>  <button onClick={UpdateImage}>Upload</button> <br/>
                <p className="lead">Username: <mark></mark>{profile?.user?.username}<mark/></p> 
                <input onChange={(e)=> setEmail(e.target.value)} value={Email} type="text" className="form-control" placeholder="Email"/> <br/>
                <input onChange={(e)=> setFullname(e.target.value)} value={Fullname} className="form-control" placeholder="Full Name"/> <br/>
                <button onClick={UserUpdate} className="btn btn-success pl-5 pr-5 m-3">Save</button>
                  
                   </div>
               ):(<div>
                 
                <p className="lead">{profile?.user?.username}</p>
                <p className="lead">{profile?.fullname}</p>
                <p className="lead">{profile?.user?.email}</p>
                <button onClick={()=>setEditMode(true)} className="btn btn-success pl-5 pr-5 m-3">Edit</button>
               </div> )}
               
            </div>


            <div className="col-md-8 mt-5 mb-5">
    
          
    
    
    
                <div className="card shadow-lg">
                    <em className="text-center">writen by <Link to="">post?.user?.user?.username</Link> at post?.created</em> <br />
    
    
                    <div className="media card-body ">
    
                        <div className="media-body">
                        <h5 className="mt-0 font-weight-bold">post?.title</h5>
    
                        <img className="img-fluid" src="" alt=""/>
    
                        post?.description
                        </div>
                    </div>
                </div>
    
            </div>
    

    
        </div>
    
    
    </div>
    )
}

export default Profile

