import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize);
        } else {
            alert('Please select a size before adding to cart');
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplayleft">
                <div className='productdisplay-img-list'>
                    {<img src={product.image} alt=""/>}
                    {<img src={product.image} alt=""/>}
                    {<img src={product.image} alt=""/>}
                    {<img src={product.image} alt=""/>}
                </div>
                <div className='productdisplay-img'>
                    {<img className='productdisplay-main-img' src={product.image} alt=""/>}
                </div>
            </div>
            <div className='productdisplay-right'> 
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
                        <div className={selectedSize === 'S' ? 'selected-size' : ''} onClick={() => setSelectedSize('S')}>S</div>
                        <div className={selectedSize === 'M' ? 'selected-size' : ''} onClick={() => setSelectedSize('M')}>M</div>
                        <div className={selectedSize === 'L' ? 'selected-size' : ''} onClick={() => setSelectedSize('L')}>L</div>
                        <div className={selectedSize === 'XL' ? 'selected-size' : ''} onClick={() => setSelectedSize('XL')}>XL</div>
                        <div className={selectedSize === 'XXL' ? 'selected-size' : ''} onClick={() => setSelectedSize('XXL')}>XXL</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
