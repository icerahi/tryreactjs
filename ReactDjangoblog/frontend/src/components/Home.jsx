import React,{useState,useEffect} from 'react'
import {Link } from "react-router-dom"
import Axios from 'axios'
import Posts from './Posts'

const Home = () => {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <Posts />

                </div>

                <div className="col-md-4">
                    <h1>This is sidebar</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
