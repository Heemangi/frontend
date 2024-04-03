import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo_transparent.png';
import cart from "../Assets/shopping-bag-icon.png";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import all_products from "../Assets/all_products";
import { ShopContext } from '../../Context/ShopContext';
import debounce from 'lodash/debounce'; // Import lodash debounce function

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("Sarees");
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); // State to manage the visibility of suggestions
    const navigate = useNavigate(); // Initialize the navigate function for redirection
    const authToken = localStorage.getItem('auth-token'); // Get the auth token from localStorage

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSuggestions([]);
        } else {
            const results = all_products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSuggestions(results);
        }
    }, [searchQuery, all_products]);

    const debouncedSearch = debounce((query) => {
        // Redirect to search results page with search query as URL parameter
        navigate(`/search?q=${query}`);
    }, 300);
    
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        debouncedSearch(query);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            setSearchQuery(''); // Clear search query
            setShowSuggestions(false); // Collapse suggestions when Enter key is pressed
        }
    }

    const handleSearch = () => {
        // Redirect to search results page with search query as URL parameter
        navigate(`/search?q=${searchQuery}`);
    }

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Navigate to individual product display page
        setShowSuggestions(false); // Hide suggestions when clicking on a product card
    }

    const handleSearchBoxClick = () => {
        setShowSuggestions((prevState) => !prevState); // Toggle the showSuggestions state
    }

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    };

    return (
        <div className='navbar'>
            <div className="navlogo">
                <Link to="/"> 
                    <img src={logo} alt=''/>
                </Link>
            </div>        

            <div className='navli'>
                <ul className="navmenu">
                    <li onClick={() => { setMenu("Sarees") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/sarees'>Sarees</Link>{menu==="Sarees"?<hr/>:<></>}
                    </li>
                    <li onClick={() => { setMenu("Lehangas") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/lehangas'>Lehangas</Link> {menu==="Lehangas"?<hr/>:<></>}
                    </li>
                    <li onClick={() => { setMenu("Suits") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/suits'>Suits</Link> {menu==="Suits"?<hr/>:<></>}
                    </li>
                    <li onClick={() => { setMenu("PartyWear") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/partywear'>PartyWear</Link> {menu==="PartWear"?<hr/>:<></>}
                    </li>
                </ul>
            </div>

            
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-bar" 
                       value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} 
                       onClick={handleSearchBoxClick} // Show suggestions when clicking on search box
                />
                <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={handleSearch} />
                <div className={`suggestions ${showSuggestions && searchQuery.trim() !== '' ? 'show' : 'hide'}`}>
    {suggestions.length > 0 && (
        <ul>
            {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleProductClick(suggestion.id)}>
                    {suggestion.name}
                </li>
            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="navright">
                {authToken ? (
                    <button className='logout-button' onClick={handleLogout}>
                        Log Out
                    </button>
                ) : (
                    <Link to='/login'>
                        <button className='login-button'>Log In</button>
                    </Link>
                )}
                <Link to="/cart"> 
                    <img src={cart} alt="Cart" className='cart-icon'/>
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;