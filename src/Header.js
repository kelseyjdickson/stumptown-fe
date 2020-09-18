import React from 'react'
import logo from './header.png'



class Header extends React.Component{



    render(){
        return(
            <>
          
            {/* <p id="overlay">Free Shipping On Orders Over $40: Due to fires in Oregon, some orders might face delays.</p> */}
              
            <img class="header-logo"src={logo} alt="header logo"></img>
           </>
            
        )

    }
}

export default Header