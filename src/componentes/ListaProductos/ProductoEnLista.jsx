import React from 'react'
import './ProductosLista.css'

export const ProductoEnLista = () => {
  return (
    <div className='producto'>
        <div className='imgProduct'>
            <img src="" alt="imagenProducto" />

        </div>
        <div>
           <div className='precio'>precio  envio</div> 
            <div className='descripcion'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div> 
        </div>
        <div className='city'>
            localidad
        </div>
    </div>
    )
}
