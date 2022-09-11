import React, { useState, useEffect } from 'react';
import EditItem from './EditItem';

function ItemList () {
    const [ lists, setList ] = useState( [] );


    function handleDeleteClick ( e ) {
        let url = `http://localhost:9292/${ e.target.id }`
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
        fetch( "http://localhost:9292" )
            .then( ( resp ) => resp.json() )
            .then( ( data ) => setList( data ) );
    }, [] );
    let array = (
        lists.map( ( x ) => (
            <div className="templates" key={ x.id }>
                <img src={ x.image_url } alt={ x.name } className="image" />
                <p>{ x.name }</p>
                <p>{ x.amount }bags</p>
                <EditItem id={ x.id } lists={ x } setLists={ setList } />
                <button onClick={ handleDeleteClick } id={ x.id } className="delete-btn">Delete</button>
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