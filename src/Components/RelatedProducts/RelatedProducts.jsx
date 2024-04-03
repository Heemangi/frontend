import React from 'react'
import "./RelatedProducts.css"
import Item from '../Item/Item'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import all_products from "../Assets/all_products"


const RelatedProducts = () => {
  // const {allproduct} = useContext(ShopContext);
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className='relatedproducts-item'>
            {all_products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts;