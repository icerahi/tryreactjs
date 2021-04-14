import React,{useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import Axios from 'axios'
import { useStateValue } from '../state/StateProvier'
const PostUpdate = () => {
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Image, setImage] = useState("")
    const [newImage, setnewImage] = useState(null)
    const {id} = useParams()
    
    const [{profile},{}]= useStateValue()
    const history = useHistory()
    useEffect(()=>{
        const getpost = async()=>{
            await Axios({
                method:'get',
            url:`http://localhost:8000/api/${id}/`,
            headers:{
                Authorization:`token ${window.localStorage.getItem('token')}`
            }
            })
            .then(response => {
                setTitle(response.data?.title)
                setDescription(response.data?.description)
                setImage(response.data?.image)
            })
        }

        getpost()
    },[])

    const Update = async ()=>{
        let formfield = new FormData()
        formfield.append('title',Title)
        formfield.append('description',Description)
        formfield.append('user',profile?.id)
        if (newImage !== null){
            formfield.append('image',newImage)
        }

        await Axios({
            method:'put',
            url:`http://localhost:8000/api/${id}/`,
            data:formfield,
            headers:{
                Authorization:`token ${window.localStorage.getItem('token')}`
            }
        })
        .then(response => {
            //console.log(response.data)
            history.push('/')
        })
        .catch(err =>{
            alert("Something is wrong!!!")
        })
    }
   

 
    return (
        <div className="container">
        <div className="row justify-content-center">
 
             <div className="col-md-6 mt-5">
 
             
             <div className="card">
                 <p className="lead text-center">Update Post</p>
                 <div className="media card-body shadow-lg ">
             <div className="media-body text-center">
             
                     <input value={Title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder="Title"/> <br/>
                     <textarea value={Description} onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Description"/> <br/>
                     <img className="w-50 h-50" src={Image} alt="" />
                     <input onChange={(e)=>setnewImage(e.target.files[0])} type="file"/>
                     <button onClick={Update}  class="btn btn-success">Update</button>
                 
             </div>
             </div>
             </div>
 
             </div>
 
             </div>
     </div>
    )
}

export default PostUpdate
