import React from 'react'
import './CajaBusqueda.css'

export const CajaBusqueda = () => {

    const customSubmit = (data) => {
        console.log(data)

    }
 
 
    return (
        <header> 
            <img src="../../../public/assets/Logo_ML.png" alt="logo de Mercado Libre" className='logo'/>
            <form onSubmit="customSubmit()">
                <input type="text" id='buscador' placeholder='Nunca dejes de buscar'/>
                <button type='button' id='Buscar'>
                    <img src="../../../public/assets/ic_Search.png" alt="Buscar"  />
                </button>
            </form>
           
        </header>
    ) 
}

/*comentario*/
