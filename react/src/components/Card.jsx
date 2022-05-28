import { useCallback } from "react";
import { useState } from "react";

const Card = () => {
    const [count, setCount] = useState(1);

    const handleChange = (e) => setCount(e.target.value)
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => {
        if(count == 1) return;
        setCount(prev => prev - 1);
    }

    const handleAddToCart = () => {
        console.log('do something');
    }
    return (
        <div className="card">
            <div className="top">
                <span className="sale-tag">17%</span>
                <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
            </div>
            <div className="img">
                <img src="../imgs/sale-img.webp"  alt=""/>
            </div>
            <div className="title">Organic Sweet Corn</div>
            <div className="stock"> <span className="tick-icon"><img className="tick-icon" src="../imgs/tick.svg" alt="" /></span>In Stock <span className="available">1kg</span></div>
            <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
            <div className="counter">
                <button className="decrement" onClick={decrement}>-</button>
                <input value={count} onChange={handleChange} type="number" min='1' />
                <button className="increment" onClick={increment}>+</button>
            </div>
            <button className="add-cart" onClick={handleAddToCart} > <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
        </div>
    )
}

export default Card;