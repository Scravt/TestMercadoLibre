import React from 'react'

import { SearchBox } from '../SearchBox/SearchBox'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { useParams } from 'react-router-dom';
import './DetailsTheProducts.css'



export const DetailTheProducts = () => {
    const onClick = () => {
        console.log("compraste")
    }

    return (
        <>
            <SearchBox />
            <div className='detailproductos'>
                <Breadcrumbs />
                <div className='dataProducts'>
                    <div className='picture'>imagen
                        <img src="" alt="foto producto" />
                    </div>
                    <div>
                        <div className='condicion'> condicion  vendidos  </div>
                        <div className='nameproduct'>Nombre producto </div>
                        <div className='price'>precio</div>
                        <button onClick={onClick} className='buy' >Comprar</button>
                    </div>
                    <div>
                        <div className='titledescription'>
                            Descripcion del producto
                        </div>
                        <div className='Textdescription'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
