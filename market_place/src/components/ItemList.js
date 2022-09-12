import React, { useState, useEffect } from 'react';
import EditItem from './EditItem';

function ItemList () {
    const [ lists, setList ] = useState( [] );


    function handleDeleteClick ( e ) {
        let url = `https://my-farmers-product-api.herokuapp.com/items/${ e.target.id }`
        fetch( url, {
            method: "DELETE"
        } )
            .then( ( r ) => r.json() )
            .then( () => {
                const updatedLists = lists.filter( ( q ) => q.id !== e.target.id );
                setList( updatedLists );
            } );
        window.location.reload()
    }
console.log(lists);
    useEffect( () => {
        fetch( "https://my-farmers-product-api.herokuapp.com/items" )
            .then( ( resp ) => resp.json() )
            .then( ( data ) => setList( data ) );
    }, [] );
    let array = (
        lists.map( ( x ) => (
            <div className="templete box" key={ x.id }>
                <img src={ x.image_url } alt={ x.name } className="image" />
                <p>{ x.name }</p>
                <p>{ x.amount }bags</p>
                <div id='btn'>
                    <button onClick={ handleDeleteClick } id={ x.id } className="delete-btn">Delete</button>
                    <EditItem id={ x.id } lists={ x } setLists={ setList } />
                </div>
            </div>
        )
        )
    );

    return (
        <div className='div5'>
            { array }

        </div>
    );
}

export default ItemList;