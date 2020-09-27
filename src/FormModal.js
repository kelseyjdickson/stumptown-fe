import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import stump from './photos/STUMPTOWN.png'
import { Checkbox, Icon, Form } from 'semantic-ui-react'

const mystyle = {
    fontSize: "30px",
    fontFamily: 'Gotham',
  color: "#bf955a"
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

function ModalExampleModal() {
    const [open, setOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={button}>Select</Button>}
        >
            <Modal.Header style={mystyle}> Subcription Shipping</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={stump} wrapped />
                <Modal.Description>
                    <Header style={mystyle}>Add your info below</Header>


                    <Form size='large'>
                        <Form.Field>
                            <label>First Name</label>
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



                    <p>If the information below is correct, hit continue</p>

                </Modal.Description>
            </Modal.Content>
            
            
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Edit
        </Button>
                <Button className="button1"onClick={() => setSecondOpen(true)} primary> Continue <Icon name='right chevron' />
                    
                    </Button>
            </Modal.Actions>
            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='small'
            >
                <Modal.Header style={mystyle}>Thank you!</Modal.Header>
                <Modal.Content>
                    <p style={mystyle}>Your Subcription is now all set up!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                    
                        icon='check'
                        content='All Done'
                        onClick={() => setOpen(false)
                         }
                    />
                </Modal.Actions>
            </Modal>
        </Modal>
    )
}

export default ModalExampleModal