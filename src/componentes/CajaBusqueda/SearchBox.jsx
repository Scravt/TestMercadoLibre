import React from 'react'
import { useState } from 'react'
import axios from "axios";
import './SearchBox.css'

export const SearchBox = () => {
    const [Search, SetSearch] = useState ('');
    const baseURL = 'https://api.mercadolibre.com/sites/MLA/search?q='  

    const onChange =(e) =>{
        SetSearch(e.target.value)
    }
    
    const onClick =() =>{
        axios.get(baseURL+Search).then((response) => {
            console.log(response.data);
        });
      };




 /* usar axios*/
 /* trabajar sin el form y con onClick     rederigir con aprametros del impute ver documentacion de react router      */
    return (
        <header> 
            <img src="../../../public/assets/Logo_ML.png" alt="logo de Mercado Libre" className='logo'/>         
            <input type="text" name='search' id='Search' className='Search' placeholder='Nunca dejes de buscar' autoComplete='off'
            onChange={onChange}
            />
            
            <button type='button' className='buttonsearch' onClick={onClick}>
                    <img src="../../../public/assets/ic_Search.png" alt="Buscar"  />
            </button>
            
        </header>
    ) 
}


