import React from 'react'
import {CajaBusqueda} from '../CajaBusqueda/CajaBusqueda'
import { Breadcrumbs } from '../ListaProductos/Breadcrumbs'
import './DetalleProducto.css'



export const DetalleProducto = () => {
  return (
    <>
      <CajaBusqueda/>
      <div className='Cdetalles'>
       <Breadcrumbs/>
        <div className='datos'>
          <div className='picture'>imagen
              <img src="" alt="foto producto"/>
          </div>
          <div>
            <div className='condicion'> condicion  vendidos  </div> 
            <div className='Nproducto'>Nombre producto </div>
            <div className='precio'>precio</div>
            <button type='button' id='comprar'>Comprar</button>
          </div>
          <div>
            <div className='Tdescripcion'>
              Descripcion del producto
            </div>
            <div className='TextoDescripcion'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}
/*comentario*/