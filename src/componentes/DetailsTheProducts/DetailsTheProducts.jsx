import React, { useState, useEffect } from 'react'
import axios from "axios";
import { SearchBox } from '../SearchBox/SearchBox'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { useParams } from 'react-router-dom';
import './DetailsTheProducts.css'



export const DetailsTheProducts = () => {
    const searchParams = new URLSearchParams(useParams());
    const id = searchParams.get('id');
    const baseURL = 'https://api.mercadolibre.com/items/';
    const [item, setItem] = useState(null);
    const [description, setDescription] = useState(null);

    const getItem = async () => {
        try {
            const response = await axios.get(`${baseURL}${id}`);
            setItem(response.data);
            const description = await axios.get(`${baseURL}${id}/description`);
            setDescription(description.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
  

    useEffect(() => {
        getItem();
    }, []);

    const onClick = () => {
        console.log("compraste");
    };
    return (
        <>
            <SearchBox />
            <div className='detailproductos'>
                <Breadcrumbs />
                {item && description &&(
                    <div className='dataProducts'>
                        <div className='picture'>
                            <img src={item.secure_thumbnail} alt="foto producto" />
                        </div>
                        <div>
                            <div className='condicion'> {item.condition}  </div>
                            <div className='nameproduct'>{item.title} </div>
                            <div className='price'>{item.price}</div>
                            <button onClick={onClick} className='buy' >Comprar</button>
                        </div>
                        <div>
                            <div className='titledescription'>
                                Descripcion del producto
                            </div>
                            <div className='Textdescription'>
                                {description.plain_text}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
