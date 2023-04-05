import React from 'react'
import './ProductList.css'

export const ListOfProducts = () => {
  return (
    <div className='products'>
        <div className='imgProduct'>
            <img src="" alt="imagenProducto" />

        </div>
        <div>
           <div className='price'>precio  envio</div> 
            <div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div> 
        </div>
        <div className='city'>
            localidad
        </div>
    </div>
    )
}
