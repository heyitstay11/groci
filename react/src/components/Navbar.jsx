import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/services/authSlice'
import { useEffect } from "react";
import { useCartQuery, useCreateCartMutation } from "../redux/services/cartApi";
import { setCart } from "../redux/services/cartSlice";
import { toast } from "react-toastify";

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [locationSelect, setLocationSelect] = useState(true);
    const { token } = useSelector((state) => ({...state.auth}));
    const { quantity } = useSelector((state) => ({...state.cart}));
    const { data: cartData } = useCartQuery(token);
    const [createCart] = useCreateCartMutation();
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        toast.success('Logged out succesfully');
        dispatch(logoutUser());
    }

    useEffect(() => {
        if(!cartData){
            if(token){
                createCart({token}).then(data => console.log(data));
            }
        }else{
            dispatch(setCart(cartData));
        }
    }, [cartData]);

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
                    {token ? 
                     <button tabIndex={0} onClick={handleLogout} style={{ cursor: 'pointer', background: 'transparent', color: 'white', border: 'none'}} className="lock-svg icon-link" >Log Out</button>
                    :
                    <>
                        <Link to="/register" className="lock-svg icon-link" >Sign Up</Link>
                        <Link to="/login" className="avatar-svg icon-link" >Sign In</Link>
                    </>}
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
    
                <Link to="/cart" className="cart icon-link"> <span className="cart-items">{quantity}</span> My Cart</Link>
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
                <li><NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>Shop </NavLink></li>
                <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink></li>
                <li><NavLink to='/orders' className={({ isActive }) => isActive ? 'active' : ''}>Orders</NavLink></li>
                <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'active' : ''}>Blog </NavLink></li>
                <li><NavLink to='/faq' className={({ isActive }) => isActive ? 'active' : ''}>FAQ </NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact </NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar;