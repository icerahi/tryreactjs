import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails'
import Profile from './components/Profile'
import { useStateValue } from './state/StateProvier'
import Axios from 'axios'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './components/CreatePost'
import PostUpdate from './components/PostUpdate'

const App = () => {
    const [{profile,reload},dispatch]= useStateValue()
    useEffect(() => {
      try{
        const getprofile= async() => {
          await Axios({
              method:'get',
              url:'http://localhost:8000/api/user/profile/',
              headers:{
                  Authorization:`token ${window.localStorage.getItem('token')}`,
              }
          })
          .then(response => {dispatch({type:'profile',value:response.data['userdata']})})
          .catch(e => console.log(e))
    } 
    getprofile()

      }
    catch{
      dispatch({
        type:'profile',
        value:null
      })
    }
 



  }, [reload])

  return (
      <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home} />

    

        { profile !==null?
       <Switch>
          <Route exact path="/create" component={CreatePost}/>
          <Route exact path="/profile" component={Profile}/>    
          <Route exact path="/details/:id/" component={PostDetails}/> 
          <Route exact path="/update/:id/" component={PostUpdate}/>
       </Switch>
        :
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/:id/" component={PostDetails}/>
        </Switch>}
    
      
   
       
 
 
      </BrowserRouter>
  )
}

export default App
