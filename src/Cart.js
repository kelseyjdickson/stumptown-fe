import React from 'react'
import CartPage from './CartPage'
import { Route } from 'react-router-dom'




class Cart extends React.Component {



    render() {

        return (
            <>

                <Route path="/cartpage" >
                    <CartPage cartArray={this.props.cartArray} />
                </Route>
            </>
        )

    }
}

export default Cart