import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo_transparent.png';
import cart from "../Assets/shopping-bag-icon.png";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import debounce from 'lodash/debounce'; // Import lodash debounce function

const Navbar = () => {
    const { allproduct, getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("Sarees");
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function for redirection

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSuggestions([]);
        } else {
            const suggestions = allproduct.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5); // Limit suggestions to first 5
            setSuggestions(suggestions);
        }
    }, [searchQuery, allproduct]);

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
            // Clear suggestions when Enter key is pressed
            setSuggestions([]);
        }
    }

    const handleSearch = () => {
        // Redirect to search results page with search query as URL parameter
        navigate(`/search?q=${searchQuery}`);
    }


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
                       value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} />
                <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={handleSearch} />
                <div className="suggestions">
                    {suggestions.length > 0 && (
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => setSearchQuery(suggestion.name)}>{suggestion.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="navright">
                {localStorage.getItem('auth-token') ? (
                    <button className='logout-button' onClick={() => {
                        localStorage.removeItem('auth-token');
                        window.location.replace('/')
                    }}>Log Out</button>
                ) : (
                    <Link to='/login'><button className='login-button'>Log In</button></Link>
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
