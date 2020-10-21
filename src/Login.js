import React from "react";
import { Link } from 'react-router-dom'

import Login1 from './photos/login.png'

import Logo from './photos/STUMPTOWN.png'
import Banner from './Banner'
import { Button } from 'semantic-ui-react'




 const mystyle = {
    padding: "23px",
    borderBottom: "7px solid black",
    borderRadius: "24px"
  }

  const mystyle1 = {
    padding: "23px",
    borderBottom: "8px solid black",
    borderRadius: "24px",
    marginBottom: "20px"
  }
class Login extends React.Component {

  state = {
    username: '',
    password: ''
    
  }

 
  render() {

    return (
      <>
        <Banner />
        <div>
          <img src={Logo} alt="stumptown logo"></img>
        </div>
        <img className="img-login" src={Login1} alt="LOGO" />
        <h1 className="login">Hello, there.</h1>
        <p className="login-p">Log into your account below. Don’t have one?<span className="span-login"> Sign up here.</span></p>

        <form  >
          <label >

            <input style={mystyle}className="parent-form"  type="text" name="username" placeholder="Username" /><br></br>
          </label>
          <label>
            <input style={mystyle1} className="login-form" type="password"name="password" placeholder="Password" /><br></br>
          </label>
        </form>
        <Link to="/items">
        <Button className="login-button"basic color='black' content='Submit' />
          
        </Link>
      </>
    )

  }
}



export default Login;