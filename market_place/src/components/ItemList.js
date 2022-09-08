import React, { useState, useEffect } from 'react';

function ItemList () {
    const [ lists, setList ] = useState( [] );

    useEffect( () => {
        fetch( "http://localhost:9292" )
            .then( ( resp ) => resp.json() )
            .then( ( data ) => setList( data ) );
    }, [] );
    let array = (
        lists.map( ( x ) => (
            <div>
                <img src={ x.image_url } alt={ x.name } className="image" />
                <p key={ x.id }>{ x.name }</p>
                <p>{ x.amount }</p>
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