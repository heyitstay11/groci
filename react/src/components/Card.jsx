import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/services/cartSlice';

const Card = ({ sale = 0, img = '', _id, title = 'Demo Title', quantity = 1, price = 1 }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1); 

    const handleChange = (e) => setCount(e.target.value)
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => {
        if(count == 1) return;
        setCount(prev => prev - 1);
    }

    const handleAddToCart = () => {
        dispatch(addProduct({ _id, title, count, max_quantity: quantity, price , sale , img }));
    }
    return (
        <div className="card">
            <div className="top">
                <span className="sale-tag">{sale}%</span>
                <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
            </div>
            <div className="img">
                <img src="../imgs/sale-img.webp"  alt=""/>
            </div>
            <div className="title">{title}</div>
            <div className="stock"> <span className="tick-icon"><img className="tick-icon" src="../imgs/tick.svg" alt="" /></span>In Stock <span className="available">1kg</span></div>
            <div className="price"><s>${price}</s> <strong>${ price - (price * (sale / 100)).toFixed(2) }</strong></div>
            <div className="counter">
                <button className="decrement" onClick={decrement}>-</button>
                <input value={count} onChange={handleChange} type="number" min='1' max={quantity} />
                <button className="increment" onClick={increment}>+</button>
            </div>
            <button className="add-cart" onClick={handleAddToCart} > <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
        </div>
    )
}

export default Card;