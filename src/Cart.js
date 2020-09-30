import React from 'react'
import CartPage from './CartPage'
import Footer from './Footer';
import CheckoutModalNew from './CheckoutModalNew'









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
        
        return (
            <>
          
           <h1 className="cart-head">CART</h1>
             { this.props.cartArray.length >= 1 ?  this.turnToItemSection() : <h1>No Items in your Cart!</h1>}
          
           
           <div className="cart-total-cont">
           <div class="total-box">
            <div>
               
                <h1>Subtotal: ${this.props.cartTotal}.00</h1>
                <h1>Shipping: FREE</h1>
                <hr/>
                <h1>Total: ${this.props.cartTotal}.00</h1>
            </div>
        </div>
        <div class="button" className="modal-but">
            <CheckoutModalNew cartArray={this.props.cartArray}/> 
            
            {/* <CheckoutModal
            cartArray={this.props.cartArray}  /> */}
        </div>

        </div>
           <Footer />
            </>

        )

    }
}

export default Cart