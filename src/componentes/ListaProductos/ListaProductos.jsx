import React from 'react'
import { ProductoEnLista } from './ProductoEnLista'
import {CajaBusqueda} from '../CajaBusqueda/CajaBusqueda'
import './ProductosLista.css'

export const ListaProductos = () => {



  return (
    <>
      <CajaBusqueda/>
      
      <div className='ContenedorProductos'> 
      <div className='breadcrumbs'>
        breadcrumbs
      </div>
        <ProductoEnLista/>
      </div>
    
    
    </>
      
    
    
  )
}