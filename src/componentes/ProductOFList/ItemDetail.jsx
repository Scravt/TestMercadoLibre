import React from 'react'
import './ProductOfList.css'
import { useNavigate } from 'react-router-dom';



export const ItemDetail  = ({ item }) => {
    const divEnteroDecimal = (item.price).toLocaleString('de-DE')
    const navigate = useNavigate();
    const ClickProduct = () => {
     navigate(`/items/${item.id}`)
    }

    return (
        <div className='products' >
            <div className='imgProduct'>
                <img src= {item.thumbnail} alt="imagenProducto" onClick={ClickProduct} />

            </div>
            <div>
                <div className='price'onClick={ClickProduct}>    $ {divEnteroDecimal}</div>
                <div className='description' onClick={ClickProduct}>{item.title} </div>
            </div>
            <div className='city'>
            {item.address.state_name}
            </div>
        </div>
    )
}
