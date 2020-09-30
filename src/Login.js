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

 

  // handleChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // handleClick = evt => {
  //     evt.preventDefault()




  // fetch("http://localhost3000/users/login",{
  //     method: "POST",
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         usernameInput: this.state.username,
  //         password: this.state.password

  //     })
  // })
  // .then(res=> res.json())
  // .then((response) => {
  //   console.log("yoyo",response)
  //     //Dont know what to do here.

  // })


  // }
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

// value={this.state.password} onChange={this.handleChange}
//value={this.state.username}onChange={this.handleChange}

export default Login;