import React, { useState, useEffect } from 'react';
// import NewList from './NewList';

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
                <img src={ x.image_url } alt={ x.name } />
                <p key={ x.id }>{ x.name }</p>
                <p>{ x.amount }</p>
                {/* <NewList list = {lists} /> */ }
            </>
        )
        )
    );

    return (
        <div className='div5'>
            {/* <NewList /> */}
            { array }

        </div>
    );
}

export default ItemList;