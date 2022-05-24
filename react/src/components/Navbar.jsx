import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [locationSelect, setLocationSelect] = useState(true);

    return (
        <header role="banner">
        
        <a className="skip-link" href="#!">Skip to Content</a>
        
        <div className="topbar">
            <div className="topbar-content wrapper">
                <span className="sale-notice">
                    <a href="#!" className="tag-svg">20% cashback htmlFor all users | Code: <strong>GROCISL20</strong> </a>
                </span>
                
                <span className="account-links">
                    <span className="eye-svg icon-link">
                        <label htmlFor="location" style={{ cursor: 'pointer'}} onClick={() => setLocationSelect(prev => !prev)}>Your Location</label>
                        <select  name="location" className={ locationSelect ? "visually-hidden" : ''} id="location">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Kolkata">Kolkata</option>
                        </select>      
                    </span>
                    <Link to="/register" className="lock-svg icon-link" >Sign Up</Link>
                    <Link to="./login" className="avatar-svg icon-link" >Sign In</Link>
                </span>
            </div>
    </div>  

        <div className="search-bar">
            <div className="search-bar-content wrapper">
                <a href="#!" className="brand-img"><img src="../imgs/cart.svg" alt="" /></a>
            
                <form className="search-form">
                    <label htmlFor="product-search" className="visually-hidden" >Search Products</label>
                    <input type="text" name="product-search" placeholder="Enter a keyword" />
                    <button type="submit">Search</button>
                </form>
    
                <a href="#!" className="cart icon-link">My Cart</a>
                 <button className="menu add-cart" id="menuBtn" onClick={() => setNavOpen(prev => !prev)}>
                     <img src="../imgs/menu.svg" alt="" />
                     <span className="visually-hidden">Menu</span>
                 </button>
            </div>
        </div>
        
        <nav>
            <ul className={`nav-list ${isNavOpen ? 'active': ''} `}>
                <li><NavLink to='/'  className={({ isActive }) => isActive ? 'active' : ''} >Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
                <li><NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>Fruit & Vegetables</NavLink></li>
                <li><NavLink to='/shop' className={({ isActive }) => isActive ? 'active' : ''}>Shop </NavLink></li>
                <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'active' : ''}>Blog </NavLink></li>
                <li><NavLink to='/faq' className={({ isActive }) => isActive ? 'active' : ''}>FAQ </NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact </NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar;