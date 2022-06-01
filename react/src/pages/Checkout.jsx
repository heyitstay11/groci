import '../css/checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { reset } from '../redux/services/cartSlice';
import { useDeleteCartMutation } from '../redux/services/cartApi';

const Checkout = () => {
    const [order, setOrder] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const { products, total_price } = useSelector((state) => ({...state.cart}));
    const { token } = useSelector((state) => ({...state.auth}));
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [deleteCart] =  useDeleteCartMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSave = ({city, firstName, lastName, phone, pin, state, street}) => {
       const name = `${firstName} ${lastName}`
       const address = `${street}, ${city}, ${state}, ${city}-${pin}`;
       setOrder({address, name, phone, total_price, products})
    }

    const handleOrder = () => {
        if(order.name && products.length){
            fetch('http://localhost:5000/order/create', {
                method: 'POST',
                body: JSON.stringify({...order, payment_method: paymentMethod}),
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.id){
                    const { id } = data;
                    dispatch(reset());
                    deleteCart({ token })
                    .then(data => navigate(`/orders/${id}`));
                }
            });
        }
    }
 
    return (
        <main>

        <div className="banner">
            <h1>Checkout</h1>
            <p className="bread-crumbs">Home / checkout</p>
        </div>

        <section>
            <div className="order-form">
                <h2>Billing Details</h2>
                <form onSubmit={handleSubmit(onSave)}>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('firstName', { required: true })} type="text" name="firstName" id="firstName" placeholder="John" required />
                   
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('lastName', { required: true })} type="text" name="lastName" id="lastName" placeholder="Doe" required />
                
                    <label htmlFor="phone">Phone </label>
                    <input {...register('phone', { required: true })} type="text" name="phone" id="phone" placeholder="123456789" required />
                
                    <label htmlFor="street">Street Address</label>
                    <input {...register('street', { required: true })} type="text" name="street" id="street" required placeholder="House no 1, New Street" />
                   
                    <label htmlFor="city">Town / City</label>
                    <input {...register('city', { required: true })} type="text" name="city" id="city" required placeholder="Mumbai" />

                    <label htmlFor="state">State</label>
                    <input {...register('state', { required: true })} type="text" name="state" id="state" required placeholder="Maharashtra" />
                    
                    <label htmlFor="pin">PIN</label>
                    <input {...register('pin', { required: true })} type="text" name="pin" id="pin" required placeholder="12345" />
                    <div className="">
                     <button className='nice-btn'>Save Details</button>
                    </div>
                </form>

                <table>
                    <caption>Your Order</caption>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Subtotal ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => {
                            const {_id, title, price, count} = product;

                            return <tr key={_id}>
                                <td className='title'>{title} x {count}</td>
                                <td>{count * price}</td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{total_price}</td>
                        </tr>
                    </tfoot>
                </table>

                <form>
                    <div className="">
                        <input onChange={() => setPaymentMethod('card')} type="radio" id='card' name="payment_method" value={'card'} /> 
                        <label htmlFor="card">Card Payment</label>
                    </div>
                    <div className="">
                        <input onChange={() => setPaymentMethod('cash_on_delivery')} type="radio" defaultChecked id='cash' name="payment_method" value={'cash'} /> 
                        <label htmlFor="cash">Cash on Delivery</label>
                    </div>
                    <div className="">
                        <button className='nice-btn' onClick={handleOrder} type='button'>Place Order</button>
                    </div>
                </form>

            </div>
        </section>
   
    </main>
    )
}

export default Checkout;