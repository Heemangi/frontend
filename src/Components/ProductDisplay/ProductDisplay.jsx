import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
// import fullstar from "../Assets/full_star.png"
// import emptystar from "../Assets/empty_star.png"

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);


    return (
        <div className='productdisplay'>
            <div className="productdisplayleft">
                <div className='productdisplay-img-list'>
                    {/* Make sure product.image is defined before using it */}
                    {<img src={product.image} alt=""/>}
                    {<img src={product.image} alt=""/>}
                    {<img src={product.image} alt=""/>}
                    {<img src={product.image} alt=""/>}
                </div>
                <div className='productdisplay-img'>
                    {/* Make sure product.image is defined before using it */}
                    {<img className='productdisplay-main-img' src={product.image} alt=""/>}
                </div>
            </div>
            <div className='productdisplay-right'> 
                {/* Make sure product.name is defined before using it */}
                <h1>{product.name}</h1>
                
                <div className='productdisplay-right-prices'>
                ₹{product.price}
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti deleniti ab impedit, dolore nostrum sed dolor eligendi, vel, illum modi voluptatem libero quas consequatur eos perferendis in quod minima?
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
