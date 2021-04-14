import React, { useEffect, useState } from 'react'
import { Link,useHistory,useParams } from 'react-router-dom'
import Axios from 'axios'
import { useStateValue } from '../state/StateProvier'

const PostDetails = () => {
    const {id} = useParams()
    const [post,setPost]=useState(null)
    const [{profile},{}]=useStateValue()

    const history = useHistory()
    useEffect(() => {
        
        return (async() => {
            await Axios({
                method:'GET',
                url:`http://localhost:8000/api/${id}/`,
                headers:{
                    Authorization:`token ${window.localStorage.getItem('token')}`
                }
            })
            .then(response => setPost(response.data))
            .catch(error => console.log('something wrong!!'))
        })()
    }, [])

 
    const DeletePost= async()=>{
        await Axios({
            method:'delete',
            url:`http://localhost:8000/api/${id}/`,
            headers:{
                Authorization:`token ${window.localStorage.getItem('token')}`
            }
        })
        .then(response => {
            history.push('/')
        })
        .catch(err =>{
            alert("Something wrong!!!")
        })
    }
    return (
<div className="container">
    <div className="row">
        <div className="col-md-8 mt-5 mb-5">

        {  
        profile?.user['id'] === post?.user?.user?.id &&
        (
            <div>
            <Link to={`/update/${id}/`} className="btn btn-success m-2 ">Edit</Link>
            <Link onClick={DeletePost} className="btn btn-danger m-2">Delete</Link>

            </div>

        )
        }



            <div class="card shadow-lg">
                <em class="text-center">writen by <Link to="">{post?.user?.user?.username}</Link> at {post?.created}</em> <br />


                <div className="media card-body ">

                    <div className="media-body">
                    <h5 className="mt-0 font-weight-bold">{post?.title}</h5>

                    <img className="img-fluid" src={`${post?.image}`} alt=""/>

                    {post?.description}
                    </div>
                </div>
            </div>

        </div>

        <div className="col-md-4 mt-5 text-center">
            <small>Posted by</small>
            <h1>{post?.user?.fullname}</h1>
            <img className="rounded-circle img-thumbnail shadow border-white w-50" src={`http://localhost:8000${post?.user?.image}`} alt=""/>  <br/>
            <button className="btn btn-success pl-5 pr-5 m-3">Follow</button>
        </div>

    </div>


</div>
    )
}

export default PostDetails
