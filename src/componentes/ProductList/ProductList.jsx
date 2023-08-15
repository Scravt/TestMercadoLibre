
import { ItemDetail  } from '../ProductOFList/ItemDetail'
import './ProductList.css'





export const ProductList = ({list}) => {
   
    return (
        <>  
            {list.map( (item)=> <ItemDetail key={item.id} item={item} />)}
            
        </>
    )
}