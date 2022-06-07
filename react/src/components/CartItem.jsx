import { useState } from "react"
import { useDispatch } from 'react-redux'
import { remove, addProduct } from '../redux/services/cartSlice'

const CartItem = ({img = '', _id, count, price = 0, sale = 0, max_quantity = 0, title = '', desc = ''}) => {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(count);
    
    const handleChange = (e) => setItemCount(e.target.value);
    const increment = () => setItemCount(prev => (+prev) + 1);
    const decrement = () => {
        if(count == 1) return;
        setItemCount(prev => (+prev) - 1);
    }

    const handleUpdateProduct = () => {
        if(!count || count > max_quantity) return;
        dispatch(addProduct({ _id, title, count: +itemCount, max_quantity, price, sale , img, desc }));
    }

    const removeProduct = () => {
        dispatch(remove(_id));
    }

    return (
        <li>
            <div className="cart-img-wrapper">
                <img src={img} alt=""/>
            </div>
            <div className="cart-item-details">
                <h2>{title}</h2>
                <p>{desc}</p>
                <p className="price"> Price : ₹{price}</p>
            </div>
            <div className="item-quantity">
                <div className="counter">
                    <button className="decrement"  onClick={decrement} >-</button>
                    <input value={itemCount} type="number" onChange={handleChange} />
                    <button className="increment"  onClick={increment} >+</button>
                </div>
            </div>
            <div className="">
                <button style={{ marginRight: '5px'}} onClick={handleUpdateProduct} >Update</button>
                <button onClick={removeProduct}>Remove</button>
            </div>
        </li>
    )
}

export default CartItem