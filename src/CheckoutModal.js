import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const button = {
  width: "450px",
  textAlign: "center",
  border: "5px solid white",
  padding: "25px",
  backgroundColor:"#bf955a",
  fontFamily: 'Gotham',
  fontSize: "60px",
  color:"white"
}


const mystyle = {
  fontSize: "30px",
  fontFamily: 'Gotham',
color: "#bf955a"
}

const CheckoutModal = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  let item = props.cartArray.map((item) => {
      return item.item.name
  })
  let price = props.cartArray.map((item) => {
    return item.item.price
})



  console.log("modal", props.cartArray)
  return (
    <>


      
      <Button style={button}onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Checkout
      </Button>
      
      
      

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header style={mystyle}>Thank you for placing an order with Stumptown!</Modal.Header>
        <Modal.Content>
          <h1>Your order has been placed for: {item}</h1>
          <h2>Total: ${price}.00</h2>
         

        </Modal.Content>
        <Modal.Actions>
         
          <Button color="black" className="cart-font" onClick={() => dispatch({ type: 'close' })}>
              <Link  to="/items">
            Return to Homepage
            </Link>
            
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default CheckoutModal