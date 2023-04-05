import React from 'react'
import {SearchBox} from '../CajaBusqueda/SearchBox'
import { Breadcrumbs } from '../ListaProductos/Breadcrumbs'
import './DetailProducts.css'



export const DetailProducts = () => {
  return (
    <>
      <SearchBox/>
      <div className='detailproductos'>
       <Breadcrumbs/>
        <div className='dataProducts'>
          <div className='picture'>imagen
              <img src="" alt="foto producto"/>
          </div>
          <div>
            <div className='condicion'> condicion  vendidos  </div> 
            <div className='nameproduct'>Nombre producto </div>
            <div className='price'>precio</div>
            <button type='button' className ='buy'>Comprar</button>
          </div>
          <div>
            <div className='titledescription'>
              Descripcion del producto
            </div>
            <div className='Textdescription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}
