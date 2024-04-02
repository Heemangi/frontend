import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Carousel from './Components/Carousel/Carousel';
import { caroimages } from './Components/Carousel/Data';
import Footer from './Components/Footer/Footer';
import sarees_banner from "./Components/Assets/sarees.jpg";
import lehanga_banner from "./Components/Assets/lehanga.png";
import suits_banner from "./Components/Assets/suits.jpg";
import party_banner from "./Components/Assets/lehanga_banner.jpg";
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sarees' element={<ShopCategory banner={sarees_banner} category="sarees"/>}/>
          <Route path='/lehangas' element={<ShopCategory banner={lehanga_banner} category="lehangas"/>}/>
          <Route path='/suits' element={<ShopCategory banner={suits_banner} category="suits"/>}/>
          <Route path='/partywear' element={<ShopCategory banner={party_banner} category="partywear"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  // Move the location state to Home component
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Carousel images={caroimages}/>}
      <Shop />
    </>
  );
}

export default App;
