import '../css/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reset } from '../redux/services/cartSlice';
import CartItem from '../components/CartItem';
import { useDeleteCartMutation, useUpdateCartMutation } from '../redux/services/cartApi';
import { useEffect } from 'react';

const Cart = () => {
    const dispatch = useDispatch();
    const { products, total_price, quantity } = useSelector((state) => ({...state.cart}));
    const { token } = useSelector((state) => ({...state.auth}));
    const [updateCart] = useUpdateCartMutation();
    const [deleteCart] = useDeleteCartMutation();

    const handleEmptyCart = () => {
        dispatch(reset());
        deleteCart({ token })
        .then(data => window.location.reload());
    }

    useEffect(() => {
        if(token && products.length){
            updateCart({ token, cart: { products, total_price, quantity } });
        }
    }, [products]);

    return (
        <main>

        <div className="banner">
            <h1>Cart</h1>
            <p className="bread-crumbs">Home / cart</p>
        </div>

        <div className="total wrapper">
            <p>Your Cart Total is  ₹{total_price.toFixed(2)}</p>
            <div className="btn-wrapper">
                <Link to='/checkout' >Checkout</Link> 
                <button onClick={handleEmptyCart}>Empty Cart</button>
            </div>
        </div>

        <section className="item-cart wrapper">
            <ul className="cart-list">
                <br />
                {!products.length ? (<h2>Your Cart is empty</h2>) : null}
                {products?.map(product => {
                    return <CartItem key={product._id} {...product} />
                })}
            </ul>
        </section>
        <br />
        <br />
   
    </main>

    )
}

export default Cart;