import React from "react"
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Footer from './Footer'
import LogoHeader from "./LogoHeader";


class ItemDetail extends React.Component {

    state = {
        items: []
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/items/${id}`)
            .then(res => res.json())
            .then((item) => {
                this.setState({
                    items: item
                })
            })


    }

    handleClick = () => {

        this.props.addItemToCart(this.state.items.id)
    }


    render() {



        const { items } = this.state
        if (!items) return <h3>Loading...</h3>
        const { name, price, image_url, description, bean } = this.state.items

        return (
            
            
            <>
            {/* <LogoHeader /> */}
                    <div className="item-deets">

                <Grid columns='equal'>
            <div className="detail-name">
            <p className="item-name" >{name}</p>
            </div>
                   
                    <Grid.Column width={8}>
                       
                        <img src={image_url} alt="coffee beans" />
                      
                    </Grid.Column>
                    
                    <Grid.Column >
                        
                        <p className="price1">${price}.00</p>
                        <div className="max">
                        <p className='desc'> {description}</p>
                        </div>
                        <p className="bean">{bean}</p>
                        <Link to="/subscriptions">
                        <p className="sub">Available for Subscrption</p>
                    </Link>
                    <button className="add1" onClick={this.handleClick}>Add to Cart +</button>

                        {/* onClick={this.handleClick} */}
                    </Grid.Column>
                    
                </Grid>


            </div>
            <Footer />
            </>
        )

    }
}

export default ItemDetail