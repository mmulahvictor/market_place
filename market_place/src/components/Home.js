import React from 'react';
import './Style.css';
import ItemList from './ItemList';

function Home () {
    return (
        <>
            <h1 className='title'>Raw Farm products</h1>
            <div className='div2'>
                <h3>Sell your farm produce for <span>FREE</span></h3>
                <p id='text'>Raw Farm Products is a <span>FREE</span> online marketplace where buyers and sellers meet to trade farm related products and services.</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOfUVjPLPaUqTls5_R52dkaxL0ob4N9rAUg&usqp=CAU" alt="farm products" className='div3' />
            <ItemList />
        </>
    );
}

export default Home;