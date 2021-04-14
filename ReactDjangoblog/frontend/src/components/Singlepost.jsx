import React from 'react'
import {Link} from 'react-router-dom'

const Singlepost = ({post}) => {
    return (
         <div className="card m-3">
           
                <div className="media card-body ">
                        <div className="media-body">
                            <hr/>
                            <p className="h5 mt-0 font-weight-bold">{post.title}</p> 
                            <i>writen by <Link to="/">{post.user.user.username}</Link> at {post.created}</i>  <br/>

                        {post.description}<Link to={`details/${post.id}/`}>Read More</Link>
                        </div>
                </div>
                
        </div> 
    )
}

export default Singlepost
