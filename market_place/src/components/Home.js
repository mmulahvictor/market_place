import React from 'react';
import './Style.css';

function Home () {
    return (
        <>
            <h1 className='title'>Raw Farm products</h1>
            <div className='div2'>
                <h3>Sell your farm produce for FREE</h3>
                <h4>Raw Farm Products is a marketplace you can trust</h4>
                <p id='text'>Raw Farm Products is a FREE online marketplace where buyers and sellers meet to trade farm related products and services.</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOfUVjPLPaUqTls5_R52dkaxL0ob4N9rAUg&usqp=CAU" alt="farm products" className='div3' />
        </>
    );
}

export default Home;