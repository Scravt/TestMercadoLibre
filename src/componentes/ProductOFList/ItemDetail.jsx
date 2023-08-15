import React from 'react'
import './ProductOfList.css'


export const ItemDetail  = ({ item }) => {
    const divEnteroDecimal = (item.price).toLocaleString('de-DE')
    

  /* cambiar la I por una N en el thumbnail*/


    return (
        <div className='products'>
            <div className='imgProduct'>
                <img src= {item.thumbnail} alt="imagenProducto" />

            </div>
            <div>
                <div className='price'>    $ {divEnteroDecimal}</div>
                <div className='description'>{item.title} </div>
            </div>
            <div className='city'>
            {item.address.state_name}
            </div>
        </div>
    )
}
