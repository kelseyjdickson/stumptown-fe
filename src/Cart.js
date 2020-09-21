import React from 'react'
import CartPage from './CartPage'






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
      
        // console.log(this.props.item)
        return (
            <>
            <h1>This is Cart</h1>
             { this.props.cartArray ?  this.turnToItemSection() : <h1>No Items in your Cart!</h1>}
           
           {/* {this.turnToItemSection()} */}
                
            </>
        )

    }
}

export default Cart