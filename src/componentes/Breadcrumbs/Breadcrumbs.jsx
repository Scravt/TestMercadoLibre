import React from 'react'
import './Breadcrumbs.css'
import { useNavigate } from "react-router-dom";



export const Breadcrumbs = ({ bread }) => {
    if (!bread) {
        return ''
    }
    const navigate = useNavigate();
    const breads = Object.values(bread).map(obj => obj.name)


    const SearchInCategory = (e) => {
        let categoy = (e.target.textContent)
        navigate(`/items?q=${categoy}`)
    }

    console.log(breads)

    return (
        <ul className='breadcrumbs'>
            {breads.map((element) => <li className='category' onClick={SearchInCategory} key={element} > {element}</li>)}
        </ul>

    )
}
