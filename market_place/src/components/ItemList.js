import React, { useState, useEffect } from 'react';
import NewList from './NewList';

function ItemList () {
    const [ lists, setList ] = useState( [] );

    useEffect( () => {
        fetch( "http://localhost:9292" )
            .then( ( resp ) => resp.json() )
            .then( ( data ) => setList( data ) );
    }, [] );
    let array = (
        // console.log( lists )
        lists.map( ( x ) => (
            <>
                <img src={ x.image } alt={ x.name } />
                <li key={ x.id }>{ x.name }</li>
                <NewList list = {lists} />
            </>
        )

        )
    );

    return (
        <div>

            { array }

        </div>
    );
}

export default ItemList;