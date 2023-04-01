import React from 'react'
import './CajaBusqueda.css'

export const CajaBusqueda = () => {
 
 
 
    return (
        <header> 
            <img src="../../../public/assets/Logo_ML.png" alt="logo de Mercado Libre" className='logo'/>
            <form action="">
                <input type="text" id='buscador' placeholder='Nunca dejes de buscar'/>
                <button type='button' id='Buscar'>
                    <img src="../../../public/assets/ic_Search.png" alt="Buscar"  />
                </button>
            </form>
           
        </header>
    ) 
}
