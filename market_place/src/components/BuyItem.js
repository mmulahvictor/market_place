import React from 'react'

function BuyItem({item}) {
    function handleAddToCartClick ({item}) {
        console.log( "clicked item:", item );
    }

    return (
        <li className={ item.isInCart ? "in-cart" : "" }>
            <span>{ item.name }</span>
            <span className="category">{ item.category }</span>
            {/* add the onClick listener */ }
            <button
                className={ item.isInCart ? "remove" : "add" }
                onClick={ handleAddToCartClick }
            >
                { item.isInCart ? "Remove From" : "Add to" } Cart
            </button>
            <button className="remove">Delete</button>
        </li>
    );
}

export default BuyItem