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
        


        
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
             
                <h1 className="item">Item</h1>
                
              <Image src={image_url} />
                <h1 className="cart-desc">{name}</h1>
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1 className="item">Price</h1>
                <div className="cart-price">
              <Header as="h1" textAlign="center">
                ${price}.00
              </Header>
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
                <h1 className="item">Quantity</h1>
                <div className="qty-button">
              <Header as="h1" textAlign="center">
                <Button floated="left" onClick={this.DecreaseItem}>
                  <span role="img"aria-label="minus">➖</span>
                </Button>
                 {this.state.quantity}
                <Button floated="right" onClick={this.IncrementItem}>
                  <span role="img" aria-label="plus">➕</span>
                </Button>
              </Header>
                </div>
            
            </Grid.Column>
           
            <Grid.Column width={3}>
                <h1 className="item">Subtotal</h1>
                <div className="subtotal">
              <Header as="h1" textAlign="center">
              ${price}.00
              </Header>
              </div>
            </Grid.Column>
            <Grid.Column width={1}>
              <div className="x">
            <Header className="x-cart" textAlign="center" onClick={()=>this.props.removeItem(this.props.item)} style={{color: "#bf955a"}}>
                X
              </Header>
              </div>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>


     

  




        </>
        
        )
    }
} 

export default CartPage