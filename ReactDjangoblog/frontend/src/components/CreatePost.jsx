import React,{useState} from 'react'
import { useStateValue } from '../state/StateProvier'
import Axios from 'axios'
import { useHistory } from 'react-router'

const CreatePost = () => {
    const [Title, setTitle] = useState(null)
    const [Description, setDescription] = useState(null)
    const [Image, setImage] = useState(null)
    const [{profile},dispatch] = useStateValue()
    const history = useHistory()
    
    const Post=async()=>{
        
        let formfield = new FormData()
        formfield.append('title',Title)
        formfield.append('description',Description)
       // formfield.append('user',profile?.id)

        if (Image!==null){
            formfield.append('image',Image)
        }
        
         
        await Axios({
            method:'post',
            url:'http://localhost:8000/api/',
            data:formfield,
         
            headers:{
                Authorization:`token ${window.localStorage.getItem('token')}`,
                
            }
        })
        .then(response => {
            history.push('/')
        })
        .catch(error => console.log(error))
     }

    return (
        <div className="container">
       <div className="row justify-content-center">

            <div className="col-md-6 mt-5">

            
            <div className="card">
                <p className="lead text-center">Create Post</p>
                <div className="media card-body shadow-lg ">
            <div className="media-body text-center">
            
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder="Title"/> <br/>
                    <textarea onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Description"/> <br/>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file"/>
                    <button onClick={Post} class="btn btn-success">Post</button>
                
            </div>
            </div>
            </div>

            </div>

            </div>
    </div>
    )
}

export default CreatePost
