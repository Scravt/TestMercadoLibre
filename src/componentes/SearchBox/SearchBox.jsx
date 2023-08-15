import React, { useState, useEffect } from 'react'
import './SearchBox.css'
import { useNavigate } from "react-router-dom";

export const SearchBox = ({value}) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState(value);
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const onInputSearchKeyDown = (e) => {
        if (e.key === "Enter"){
            onSearchButonClick()
        }
    } 

    const onSearchButonClick = () => {
        navigate(`/items?q=${search}`)
    }
    useEffect(() => {
      setSearch(value)
      console.log(14,value)
    }, [value])
    

    return (
        <header>
            <img src="../../../assets/Logo_ML.png" alt="logo de Mercado Libre" className='logo' />
            <input type="text" value={search} name='search' id='Search' className='Search' placeholder='Nunca dejes de buscar' autoComplete='off'
                onChange={onChange} onKeyDown={onInputSearchKeyDown }
            />

            <button type='button' className='buttonsearch' onClick={onSearchButonClick}>
                <img src="../../../assets/ic_Search.png" alt="Buscar" />
            </button>

        </header>
    )
}
