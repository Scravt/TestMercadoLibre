import { useState } from 'react'
import  {SearchBox}  from './componentes/CajaBusqueda/SearchBox'
import { ProductList } from './componentes/ListaProductos/ProductList'
import { DetailProducts } from './componentes/DetalleProducto/DetailProducts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchBox/>,
    errorElement: <h1>Path error</h1>
    
  },
  {
    path:'/items',
    element: <ProductList/>    
  },
  {
    path:'/items/:id',
    element:<DetailProducts/>
  }
  ]
);



function App() {
  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
