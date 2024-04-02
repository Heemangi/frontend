import "./Footer.css"
import logo from "../Assets/logo_transparent.png"
import fb from "../Assets/facebook_icon.png"
import insta from "../Assets/instagram_icon.png"
import twitter from "../Assets/twitter_icon.png"
import whats from "../Assets/whatsapp_icon.png"



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt=""/>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={fb} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={insta} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={twitter} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={whats} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer