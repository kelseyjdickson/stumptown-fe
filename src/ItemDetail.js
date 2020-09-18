import React from "react"


class ItemDetail extends React.Component {

    state = {
        items: null
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


    render() {


        const { items } = this.state
        if (!items) return <h3>Loading...</h3>
        const { name, price, image_url } = this.state.items

        return (
            <div>

                <p className="name1">{name}</p>

                <img src={image_url} alt="coffee beans" />
                <p className="price">${price}.00</p>

                <p className="add">Add to Cart +</p>
            </div>
        )

    }
}

export default ItemDetail