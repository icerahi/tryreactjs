import logo from './asserts/logo.png';
import bell from './asserts/bell.png';
import msg from './asserts/msg.png';
import user from './asserts/user.png'
import './App.css';
import React from 'react'

const Header = () => {
  return (
    <div className="header fixed">
      <div className="logo">
           <img src={logo} alt="" className="logo bl"/>
      </div>
    </div>
  )
}


 

function App() {
  return (
         <div className="wrapper rel">
            <Header />
         </div>
  );
}

export default App;
