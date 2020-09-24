import React from "react"


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
        console.log("hi")
        this.props.addItemToCart(this.state.items.id)
    }


    render() {

        console.log("Item Detail:", this.state)


        const { items } = this.state
        if (!items) return <h3>Loading...</h3>
        const { name, price, image_url, description, bean } = this.state.items

        return (
            <div>

                <p className="item-name">{name}</p>

                <div className="detail-cont">
                <img src={image_url} alt="coffee beans" />
                    <div className="child">
                        <p className="price1">${price}.00</p>
                        <div className="desc-info">
                        <p className='desc'> {description}</p>
                        </div>
                        <p className="bean">{bean}</p>
                        <p>Available for Subscrption</p>

                        <button onClick={this.handleClick}className="add">Add to Cart +</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default ItemDetail