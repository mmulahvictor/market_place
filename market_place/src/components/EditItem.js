import React, {useState} from 'react';
import Form from './Form';

function EditItem ( { lists, setLists, id } ) {
    const [ isedit, setEditing ] = useState( false )

    function handleChange ( e ) {
        e.preventDefault()
        if ( e )
        {
            setEditing(()=> !isedit)
        }
        console.log(e.target.id);
        fetch( `https://my-farmers-product-api.herokuapp.com/items/${ e.target.id }`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        } )
            .then( ( r ) => r.json() )

    }

    return (
        <div id='hide-card'>
            
            { isedit ? <Form id={ id } lists={lists} /> : <button className='edit-btn' onClick={ handleChange } id= {id}>Edit</button> }
        </div>
    );
}

export default EditItem;