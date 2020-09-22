import React from 'react'
import Search from './Search'

import HorseShoe from './photos/horseshoe.png'
import SuperMarket from './photos/supermarket.png'
import { NavLink, Link } from 'react-router-dom'






class NavBar extends React.Component {



    render() {

        return (
            <>
                <div className="flex">
                    <img className="horse" src={HorseShoe} alt="horsehoe"></img>
                    <div class="dropdown">
                        <button class="dropbtn">Menu</button>
                        <div class="dropdown-content">
                            <NavLink className="home" to="/items">Shop</NavLink>
                            <NavLink to="/locations" className="locations" >Locations</NavLink>
                            <NavLink className="drop-cart" to="/cart">Cart</NavLink>
                            <Search searchTerm={this.props.searchTerm}
                    changeSearchTerm={this.props.changeSearchTerm} />
                        </div>
                    </div>
                    <Link className="cart" to="/cart">
                        <img src={SuperMarket} alt="supermarket"></img>
                        <span className="span-cart">{this.props.cartArray.length}</span>
                    </Link>
                    </div>
                
                {/* <Cart 
                cartArray={this.props.cartArray}
                cartActions={this.props.cartActions}
                 /> */}


            </>
        )

    }
}

export default NavBar