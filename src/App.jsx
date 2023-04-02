import { useState } from 'react'
import  {CajaBusqueda}  from './componentes/CajaBusqueda/CajaBusqueda'
import { ListaProductos } from './componentes/ListaProductos/ListaProductos'
import { DetalleProducto } from './componentes/DetalleProducto/DetalleProducto'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CajaBusqueda/>,
    errorElement: <h1>Path error</h1>
    
  },
  {
    path:'/items',
    element: <ListaProductos/>    
  },
  {
    path:'/items/:id',
    element:<DetalleProducto/>
  }
  ]
);



function App() {
  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
