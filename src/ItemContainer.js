import React from 'react'
import ItemCard from './ItemCard'




const ItemContainer = (props) => {
    // props.cartActions.addToCart(id);
    return (

        <>
            <p className="stump">STUMPTOWN</p>
            <p className="coffee">COFFEE ROASTERS</p>
            <div className="display">
                <ul className="container-parent">
                    {props.items.map(itemsObj =>

                        <ItemCard
                            key={itemsObj.id}
                            items={itemsObj}
                            onPageChange={props.onPageChange}
                            cartActions={props.cartActions}
                        />
                    )}
                </ul>
            </div>
        </>
    )

}


export default ItemContainer