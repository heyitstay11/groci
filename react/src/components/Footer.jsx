const Footer = () => {
    return (
    <>
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
            <div className="title">Categoires</div>
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
        <li>
            <a href="./index.html"><img src="../imgs/cart.svg" alt=""/></a>
        </li>
        <li>
            <a href="./products.html"><img src="../imgs/cart.svg" alt=""/></a>
        </li>
        <li>
            <a href="./blog.html"><img src="../imgs/cart.svg" alt=""/></a>
        </li>
        <li>
            <a href="./contact.html"><img src="../imgs/cart.svg" alt=""/></a>
        </li>
    </ul>
    </div>
    </>
    )
}

export default Footer;