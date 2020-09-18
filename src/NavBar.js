import React from 'react'
import Search from './Search'
import Cart from './Cart'
import HorseShoe from './horseshoe.png'
import SuperMarket from './supermarket.png'
import { NavLink, Link } from 'react-router-dom'






class NavBar extends React.Component {



    render() {

        return (
            <>
                <div class="flex">
                    <img class="horse" src={HorseShoe} alt="horsehoe"></img>
                    <NavLink class="home" to="/items">
                        <img class="coffee-icon" src="https://img.icons8.com/ios/100/000000/coffee-beans-.png" alt="coffee-icon" />                    <Link to="/locations" class="locations" >Locations</Link>
                    </NavLink>
                    <Link class="cart" to="/cartpage">
                        <img src={SuperMarket} alt="supermarket"></img>
                        <span>{this.props.cartArray.length}</span>
                    </Link>

                </div>
                <Search searchTerm={this.props.searchTerm}
                    changeSearchTerm={this.props.changeSearchTerm} />
                <Cart cartArray={this.props.cartArray} />
            </>
        )

    }
}

export default NavBar