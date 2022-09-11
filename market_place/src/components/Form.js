import React, { useState } from 'react';
import axios from 'axios';


function Form ( { id, lists } ) {
    
    const url = `http://localhost:9292/${ id }`;
    const [ formData, setFormData ] = useState( lists )

    function submit ( e ) {
        e.preventDefault();
        axios.patch( url, {
            name: formData.name,
            amount: parseInt( formData.amount ),
            image_url: formData.image_url,
            farmer_id: parseInt( formData.farmer_id ),
            customer_id: parseInt( formData.customer_id )
        } )
            .then( res => {
                console.log( res.formData );
            } );
        window.location.reload()
    }
    function handleChange(e){
        setFormData( { ...formData, [ e.target.name ]: e.target.value } )
    }
    console.log(formData);
  return (
      <form onSubmit={ ( e ) => submit( e ) }>
          <input onChange={handleChange} id="name" name='name' defaultValue={ lists.name } type="text" placeholder='item name' className='new_list_input' /> <br /><br />
          <input onChange={ handleChange } id="amount" name='amount' defaultValue={ lists.amount } type="number" placeholder="item quantity" className='new_list_input' /><br /><br />
          <input onChange={ handleChange } id="image_url" name='image_url' defaultValue={ lists.image_url } type="text" placeholder="item image" className='new_list_input' /><br /><br />
          <input onChange={ handleChange } id="farmer_id" name='farmer_id' defaultValue={ lists.farmer_id } type="number" placeholder="farmer's id" className='new_list_input' /><br /><br />
          <input onChange={ handleChange } id="customer_id" name='customer_id' defaultValue={ lists.customer_id } type="number" placeholder="DO NOT FILL!!" className='input_customer' />
          <button className='new_list_btn'>Submit</button>
      </form>
  )
}

export default Form