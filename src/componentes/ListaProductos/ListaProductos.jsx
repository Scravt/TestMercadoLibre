import React from 'react'
import { ProductoEnLista } from './ProductoEnLista'
import {CajaBusqueda} from '../CajaBusqueda/CajaBusqueda'
import './ProductosLista.css'
import {Breadcrumbs} from './Breadcrumbs'
export const ListaProductos = () => {



  return (
    <>
      <CajaBusqueda/>
      
      <div className='ContenedorProductos'> 
        <Breadcrumbs/>
        <ProductoEnLista/>
      </div>
    
    
    </>
      
    
    
  )
}

/*comentario*/