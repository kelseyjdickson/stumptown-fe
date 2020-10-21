import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import stump from './photos/STUMPTOWN.png'
import { Checkbox, Icon, Form } from 'semantic-ui-react'

import { Link } from 'react-router-dom'



const buttonColor = {
    color: "white"
}


const mystyle = {
    fontSize: "30px",
    fontFamily: 'Gotham',
    color: "#bf955a",
    textAlign: "center"
}

const button = {
    width: "450px",
    textAlign: "center",
    border: "5px solid white",
    padding: "25px",
    backgroundColor: "#bf955a",
    fontFamily: 'Gotham',
    fontSize: "60px",
    color: "white"
}

function ModalExampleModal(props) {
    const [open, setOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)


    let item = props.cartArray.map((item) => {
        return item.item.name
    })


    return (


        <Modal

            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={button}>Checkout</Button>}
        >
            <Modal.Header style={mystyle}>Shipping</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={stump} wrapped />
                <Modal.Description>
                    <Header style={mystyle}>Add your info below</Header>

                    <Form size='large'>
                        <Form.Field>
                            <label className="label-font">First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Address</label>
                            <input placeholder='Address' />
                        </Form.Field>

                        <Form.Field>
                            <label>City</label>
                            <input placeholder='City' />
                        </Form.Field>
                        <Form.Field>
                            <label>State</label>
                            <input placeholder='State' />
                        </Form.Field>
                        <Form.Field>
                            <label>Zip</label>
                            <input placeholder='Zip' />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone</label>
                            <input placeholder='Phone' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>


                    </Form>
                </Modal.Description>
            </Modal.Content>




            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Edit
        </Button>
                <Button color="black" onClick={() => setSecondOpen(true)} > Continue <Icon name='right chevron' />

                </Button>
            </Modal.Actions>




            <Modal
                onClose={() => {
                    setSecondOpen(false);
                }}
                open={secondOpen}
                size='small'
            >
                <Modal.Header style={mystyle}>Thank you for shopping with Stumptown!</Modal.Header>

                <Modal.Content>
                    <h1 className="order-details">Your order has been placed for: </h1>
                    <p className="li-item">{item}</p><br></br>
                    <p style={mystyle}>Your order will be shipped in 3-5 business days!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button style={buttonColor}
                        className="cart-font" onClick={() => {
                            props.onDone();
                            return { type: 'close' }
                        }}>
                        <Link to="/items">
                            Return to Homepage
                        </Link>
                    </Button>

                </Modal.Actions>
            </Modal>
        </Modal>
    )
}


export default ModalExampleModal
