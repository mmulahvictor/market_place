import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';
// import Form from './Form';

function NewList () {

    const url = 'https://my-farmers-product-api.herokuapp.com/items';
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
        } );
    }

    function handle ( e ) {
        const newData = { ...data };
        newData[ e.target.id ] = e.target.value;
        setData( newData );
    }

    return (
        <div className='div4'>
            <h3>Add crop</h3>
            <form onSubmit={ submit }>
                <input onChange={ handle } id="name" value={ data.name } type="text" placeholder='item name' className='new_list_input' /> <br /><br />
                <input onChange={ handle } id="amount" value={ data.amount } type="number" placeholder="item quantity" className='new_list_input' /><br /><br />
                <input onChange={ handle } id="image_url" value={ data.image_url } type="text" placeholder="item image" className='new_list_input' /><br /><br />
                <input onChange={ handle } id="farmer_id" value={ data.farmer_id } type="number" placeholder="farmer's id" className='new_list_input' /><br /><br />
                <input onChange={ handle } id="customer_id" value={ data.customer_id } type="number" placeholder="DO NOT FILL!!" className='input_customer' />
                <button className='new_list_btn'>Submit</button>
            </form>
        </div>
    );
}

export default NewList;