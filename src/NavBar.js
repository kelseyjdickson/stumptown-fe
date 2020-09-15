import React from 'react'
import Search from './Search'
import Cart from './Cart'





class NavBar extends React.Component{



    render(){
        return(
            <>
            <h1>NavBar</h1>
            <Search />
            <Cart />
            </>
        )

    }
}

export default NavBar