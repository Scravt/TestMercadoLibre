import React from 'react'
import { ListOfProducts } from './ListOfProducts'
import {SearchBox} from '../CajaBusqueda/SearchBox'
import './ProductList.css'
import {Breadcrumbs} from './Breadcrumbs'
export const ProductList= () => {



  return (
    <>
      <SearchBox/>
      
      <div className='containerproducts'> 
        <Breadcrumbs/>
        <ListOfProducts/>
      </div>
    
    
    </>
      
    
    
  )
}