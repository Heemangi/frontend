import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useLocation,useNavigate } from 'react-router-dom';
import "./CSS/SearchPage.css"

const SearchPage = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const { searchResults, searchProducts } = useContext(ShopContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q');
        setSearchQuery(query);

        if (query) {
            fetchSearchResults(query);
        } else {
            clearSearchResults();
        }
    }, [location.search]);

    const fetchSearchResults = async (query) => {
        setLoading(true);
        try {
            await searchProducts(query);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    const clearSearchResults = () => {
        setSearchQuery('');
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Navigate to individual product display page
    }

    return (
        <div>
            {searchQuery && <h1 className="search-results-title">Search Results for "{searchQuery}"</h1>}
            {loading && <p>Loading...</p>}
            <div className="search-results-list">
                {searchResults.map((result, index) => (
                    <div className="result" key={index} onClick={() => handleProductClick(result.id)}>
                        <img src={result.image} alt={result.name} className="result-image" />
                        <h3 className="result-name">{result.name}</h3>
                        <p className="result-price">₹{result.price}</p>
                    </div>
                ))}
            </div>
            {searchResults.length === 0 && <p>No search results found.</p>}
        </div>
    );
}

export default SearchPage;
