import '../css/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/services/cartSlice';
import CartItem from '../components/CartItem';

const Cart = () => {
    const dispatch = useDispatch();
    const { products, total_price } = useSelector((state) => ({...state.cart}));

    const handleEmptyCart = () => {
        dispatch(reset());
    }

    return (
        <main>

        <div className="banner">
            <h1>Cart</h1>
            <p className="bread-crumbs">Home / cart</p>
        </div>

        <div className="total wrapper">
            <p>Your Cart Total is  ${total_price}</p>
            <div className="">
                <button>Checkout</button> 
                <button onClick={handleEmptyCart}>Empty Cart</button>
            </div>
        </div>

        <section className="item-cart wrapper">
            <ul className="cart-list">
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