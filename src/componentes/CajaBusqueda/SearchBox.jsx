import React from 'react'
import './SearchBox.css'

export const SearchBox = () => {
     const onSubmit =(event) =>{
        console.log(data)
     }
 /* usar axios*/
 
    return (
        <header> 
            <img src="../../../public/assets/Logo_ML.png" alt="logo de Mercado Libre" className='logo'/>
            <form onSubmit={onSubmit}>
                <input type="text"  className='Search' placeholder='Nunca dejes de buscar'/>
                <button type='button' className='ButtonSearch'>
                    <img src="../../../public/assets/ic_Search.png" alt="Buscar"  />
                </button>
            </form>
           
        </header>
    ) 
}
