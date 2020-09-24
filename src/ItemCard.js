import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'




class ItemCard extends React.Component {

    handleClick = () => {
        this.props.cartActions.addItemToCart(this.props.items.id)
        // this.props.cartActions.calculateCartTotal()

    }
    render() {

        console.log("This is props:", this.props.items);

        let { id, name, price, image_url } = this.props.items
        return (
            <>





                <Grid centered columns={2}>
                    <Grid.Column>
                        <Link to={`/items/${id}`}>
                            <Image src={image_url} alt="coffee beans" size="massive" onClick={() => this.props.onPageChange("item-detail")} />
                        </Link>
                        <p className="name">{name}</p>
                        <p className="price">${price}.00</p>
                        <button onClick={this.handleClick} className="add" >Add to Cart +</button>
                    </Grid.Column>
                </Grid>

                {/* <img src={image_url} alt="coffee beans" onClick={() => this.props.onPageChange("item-detail")} />    */}







            </>


        )

    }
}

export default ItemCard