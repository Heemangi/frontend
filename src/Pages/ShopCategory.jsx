import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import drop from "../Components/Assets/drop.png"
import Item from '../Components/Item/Item'
import all_products from '../Components/Assets/all_products'

const ShopCategory = (props) => {
  // const {allproduct} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className='shopcategory-indexSort'>
        <p>
          {/* <span>
            Showing 1-12
          </span> out of 36 products */}
        </p>
        {/* <div className='shopcategory-sort'>
          Sort by <img src={drop} alt=""/>
        </div> */}
      </div>
      <div className='shopcategory-products'>
        {all_products?.map((item,i) => {
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory