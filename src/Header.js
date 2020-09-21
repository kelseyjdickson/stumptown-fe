import React from 'react'
import logo from './photos/header.png'



class Header extends React.Component{



    render(){
        return(
            <>
          
           
              
            <img className="header-logo"src={logo} alt="header logo"></img>
           </>
            
        )

    }
}

export default Header