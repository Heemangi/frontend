import React from 'react'
import "./RelatedProducts.css"
import all_products from '../Assets/all_products'
import Item from '../Item/Item'

const RelatedProducts = () => {
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

export default RelatedProducts