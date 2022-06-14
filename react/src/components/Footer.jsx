import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <>
    <hr/>
     <footer>

    <div className="about-details wrapper">

        <div className="item">
            <div className="title">Groci</div>
            <ul className="list" >
                <li>Lorem</li>
                <li className="text-green">Ipsum 123 456 789</li>
                <li className="text-blue">Dolor www.abcxyz.com</li>
            </ul>
        </div>
        
        <div className="item">
            <div className="title">Top Cities</div>
            <ul className="list">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
            </ul>
        </div>

        <div className="item">
            <div className="title">Categories</div>
            <ul className="list">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
            </ul>
        </div>

        <div className="item">
            <div className="title">About Us</div>
            <ul className="list">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
            </ul>
        </div>
        
        <div className="item">
            <div className="title">Download App</div>
            <ul className="list">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
            </ul>
        </div>

    </div>

    <div className="copyright">
        <div className="content wrapper">
            Copyright &copy; 2022 All rights reserved 
        </div>
    </div>
    </footer>

    <div className="bottom-nav-container">
    <ul className="phone-nav">
        <li><Link to="/"><img src="../imgs/home.svg" alt=""/></Link></li>
        <li><Link to="/products"><img src="../imgs/menu.svg" alt=""/></Link></li>
        <li><Link to="/cart"><img src="../imgs/cart.svg" alt=""/></Link></li>
        <li><Link to="/contact"><img className="invert-icon" src="../imgs/avatar.svg" alt=""/></Link></li>
    </ul>
    </div>
    </>
    )
}

export default Footer;