import React from 'react'
import CartPage from './CartPage'
import Footer from './Footer';
import CheckoutModal from './CheckoutModal'






class Cart extends React.Component {


    turnToItemSection = () => {
        return this.props.cartArray.map((item) => (
          <CartPage key={item.id} item={item} 
          cartArray={this.props.cartArray} 
        cartActions={this.props.cartActions}
        removeItem={this.props.removeItem}/>
        
        ));
        }
   
     
    render() {
        console.log("cart total", this.props.cart)
        // console.log(this.props.item)
        return (
            <>
           <h1 className="cart-head">CART</h1>
             { this.props.cartArray.length >= 1 ?  this.turnToItemSection() : <h1>No Items in your Cart!</h1>}
          
           
           {/* {this.turnToItemSection()} */}
           <div className="cart-total-cont">
           <div class="total-box">
            <div>
                {/* {this.props.cartActions.calculateCartTotal()}  */}
                <h1>Subtotal: ${this.props.cartTotal}.00</h1>
                <h1>Shipping: FREE</h1>
                <hr/>
                <h1>Total: ${this.props.cartTotal}.00</h1>
            </div>
        </div>
        <div class="button" className="modal-but">
            <CheckoutModal
            cartArray={this.props.cartArray}  />
        </div>

        </div>
           
            </>
        )

    }
}

export default Cart