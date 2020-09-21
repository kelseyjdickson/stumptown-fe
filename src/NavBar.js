import React from 'react'
import Search from './Search'
import Cart from './Cart'
import HorseShoe from './photos/horseshoe.png'
import SuperMarket from './photos/supermarket.png'
import { NavLink, Link } from 'react-router-dom'






class NavBar extends React.Component {



    render() {

        return (
            <>
                <div className="flex">
                    <img className="horse" src={HorseShoe} alt="horsehoe"></img>
                    <NavLink className="home" to="/items">
                        <img className="coffee-icon" src="https://img.icons8.com/ios/100/000000/coffee-beans-.png" alt="coffee-icon" />                    <Link to="/locations" className="locations" >Locations</Link>
                    </NavLink>
                    <Link className="cart" to="/cart">
                        <img src={SuperMarket} alt="supermarket"></img>
                        <span>{this.props.cartArray.length}</span>
                    </Link>

                </div>
                <Search searchTerm={this.props.searchTerm}
                    changeSearchTerm={this.props.changeSearchTerm} />
                {/* <Cart 
                cartArray={this.props.cartArray}
                cartActions={this.props.cartActions}
                 /> */}
            </>
        )

    }
}

export default NavBar