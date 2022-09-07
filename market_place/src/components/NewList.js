import React, { useState } from 'react';
import axios from 'axios';

function NewList () {

    const url = 'http://localhost:9292';
    const [ data, setData ] = useState( {
        name: "",
        amount: "",
        image_url: "",
        farmer_id: "",
        customer_id: ""
    } );

    function submit ( e ) {
        e.preventDefault();
        axios.post( url, {
            name: data.name,
            amount: parseInt( data.amount ),
            image_url: data.image_url,
            farmer_id: parseInt( data.farmer_id ),
            customer_id: parseInt( data.customer_id )
        } )
            .then( res => {
                console.log( res.data );
            } );
    }

    function handle ( e ) {
        const newData = { ...data };
        newData[ e.target.id ] = e.target.value;
        setData( newData );
        console.log( newData );
    }

    return (
        <div>
            <form onSubmit={ ( e ) => submit( e ) }>
                <input onChange={ ( e ) => handle( e ) } id="name" value={ data.name } type="text" placeholder='item name' />
                <input onChange={ ( e ) => handle( e ) } id="amount" value={ data.amount } type="number" placeholder="item quantity" />
                <input onChange={ ( e ) => handle( e ) } id="image_url" value={ data.image_url } type="text" placeholder="item image" />
                <input onChange={ ( e ) => handle( e ) } id="farmer_id" value={ data.farmer_id } type="number" placeholder="farmer's id" />
                <input onChange={ ( e ) => handle( e ) } id="customer_id" value={ data.customer_id } type="number" placeholder="DO NOT FILL!!" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default NewList;