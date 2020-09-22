import React from 'react'

import { Grid, Image, Header, Button } from "semantic-ui-react";






class CartPage extends React.Component{


    state ={ 
        quantity: 1,
        show: true,
        max: 5,
        min:0, 
        cartArray: []
    } 

    
    IncrementItem = () => {
       this.setState(prevState => {
           if(prevState.quantity < 9) {
               return {
                   quantity: prevState.quantity +1
               }
           } else {
               return null
           }
       })
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
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
            quantity: evt.target.value
        })
    }
    

   
render(){

    console.log(this.props.item)
//  console.log("pop",this.props)



       let {  name, price, image_url } = this.props.item.item
     
        return(
            <>
        

        {/* <div class="flex-cart">
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
      <input className="cart-num" value={this.state.quantity} onChange={this.handleChange}/>
        <button class="plus-btn"onClick={this.IncrementItem}> +</button>
        </div>
        {/* qty */}


        {/* <h3>Subtotal</h3>
        <button onClick={()=>this.props.removeItem(this.props.item)}>X</button>  */}


        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
                <h1>Item</h1>
              <Image src={image_url} />
                {name}
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1>Price</h1>
              <Header as="h3" textAlign="center">
                ${price}.00
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
                <h1>Quantity</h1>
              <Header as="h3" textAlign="center">
                <Button floated="left" onClick={this.DecreaseItem}>
                  <span role="img">➖</span>
                </Button>
                 {this.state.quantity}
                <Button floated="right" onClick={this.IncrementItem}>
                  <span role="img">➕</span>
                </Button>
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
                <h1>Subtotal</h1>
              <Header as="h3" textAlign="center">
                  
              </Header>
            </Grid.Column>
            <Grid.Column width={1}>
            <Header as="h3" textAlign="center" onClick={()=>this.props.removeItem(this.props.item)}>
                X
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>


     

  



            {/* <Footer/> */}

        </>
        
        )
    }
} 

export default CartPage