
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './paginas/Home/Home';
import { ListPage } from './paginas/items/ListPage';
import { DetailsProduct } from './paginas/final/DetailsProduct';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Path error</h1>
    
  },
  {
    path:'/items',
    element: < ListPage />    
  },
  {
    path:'/items/:id',
    element:< DetailsProduct  />
  }
  ]
);



function App() {
  return (
    
    <RouterProvider router={router}/>

     
    
  )
}

export default App
