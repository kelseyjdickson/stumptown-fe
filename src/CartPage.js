import React from 'react'
import Footer from './Footer';






class CartPage extends React.Component{


    state ={ 
        quanity: 1,
        show: true,
        max: 5,
        min:0, 
        cartArray: []
    } 

    
    IncrementItem = () => {
       this.setState(prevState => {
           if(prevState.quanity < 9) {
               return {
                   quanity: prevState.quanity +1
               }
           } else {
               return null
           }
       })
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.quanity > 0) {
                return {
                    quanity: prevState.quanity - 1
                }
            } else {
                return null;
            }
        })
    }

    ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }
    

    handleChange = (evt) => {
        this.setState({
            quanity: evt.target.value
        })
    }
    

   
render(){

    console.log(this.props.item)
//  console.log("pop",this.props)



       let {  name, price, image_url } = this.props.item.item
     
        return(
            <>
        <h1 class="cart-font">CART</h1>

        <div class="flex-cart">
        <div>
        <h3>Item</h3>
        </div>
        <div>
        <h3>{name}</h3>
        </div>
        <div>
       <img src={image_url} alt="item-info"/>
       </div>

        <h3>Price</h3>
         <h3>{price}</h3>

        <h3>Quantity</h3>
        <button class="neg-btn" onClick={this.DecreaseItem}> - </button>
      <input className="cart-num" value={this.state.quanity} onChange={this.handleChange}/>
        <button class="plus-btn"onClick={this.IncrementItem}> +</button>
        {/* qty */}


        <h3>Subtotal</h3>
        <button onClick={()=>this.props.removeItem(this.props.item)}>X</button>

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


            <Footer/>

        </>
        )

    }
}

export default CartPage