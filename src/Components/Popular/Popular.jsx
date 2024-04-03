import "./Popular.css"
import React, { useContext } from 'react';
// import all_products from "../Assets/all_products.js"
import { ShopContext } from '../../Context/ShopContext'
import Item from "../Item/Item"
import all_products from "../Assets/all_products";

const Popular = () => {
  // const { allproduct } = useContext(ShopContext);
  return (
    <div className="popular">
        <h1>POPULAR IN STORE</h1>
        <hr/>
        <div className="popular-item">
            {all_products?.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>

            })}
{/* D:\SariswayEcom\frontend\src\Context */}

        </div>
    </div>
  )
}

export default Popular