import React from 'react'




class CartPage extends React.Component{



render(){
    console.log("kelsey",this.props)

     
        return(
            <>
        <h1 class="cart-font">CART</h1>

        <div class="flex-cart">
        <h3>Item</h3>
        {/* name of coffee below */}

        <h3>Price</h3>
        {/* Price of coffee */}

        <h3>Quantity</h3>
        <button class="neg-btn"> - </button>
        <p> 1</p>
        <button class="plus-btn"onClick={this.handleClick}> +</button>
        {/* qty */}


        <h3>Subtotal</h3>
        <p>X delete</p>

        </div>
        <div class="total-box">
            <div class="sub2" >
                <h1 >Subtotal: </h1>
                <h1>Total: </h1>
            </div>
        </div>
        <div class="button">
            <button class="checkout-btn">Checkout</button>
        </div>



        </>
        )

    }
}

export default CartPage