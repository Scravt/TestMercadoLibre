import { ProductList } from '../../componentes/ProductList/ProductList'
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { SearchBox } from '../../componentes/SearchBox/SearchBox'
import { Breadcrumbs } from '../../componentes/Breadcrumbs/Breadcrumbs'




export const ListPage = () => {
  const baseURL = 'https://api.mercadolibre.com/sites/MLA/search?q='
  const [bread, setBread] = useState (null);
  const [list, setList] = useState([]);
 
  let [searchParams] = useSearchParams();
  const value = searchParams.get('q')
  
  useEffect(() => {
    getItems();
   
  }, [searchParams])

  const getItems = () => {
    axios.get(`${baseURL}${value}`).then((response) => {
     
      setList(response.data.results.slice(0,5));
      setBread(response.data?.filters?.[0]?.values?.[0]?.path_from_root); 
      
    });
  }

  return (
    <>
      <SearchBox value={value}/>
      <div className='containerproducts'>
        <Breadcrumbs bread={bread}/>
        <div className='bloqueListaProductos'>
          <ProductList list={list} />
        </div>
        
      </div>
    </>
  )
}
