import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Singlepost from './Singlepost'
const Posts = () => {

    const [posts, setPosts] = useState(null)
    
    useEffect(() => {
        return (async() => {
            await Axios({
                method:'GET',
                url:'http://127.0.0.1:8000/api/',
                headers:{
                    Authorization:`token ${window.localStorage.getItem('token')}`
                }
            })
            .then(response => setPosts(response.data))
        })();
    }, [])

    return (
        <div  >
          { posts !== null ? (
               <>
                {
                posts.map((data,i)=>(
                    <Singlepost post={data} key={i} />
                     
              ))
               }
          </> ):( <h1>No posts yet!</h1> )}
          
        </div>
    )
}

export default Posts
