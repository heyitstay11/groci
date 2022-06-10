import '../css/admin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePendingOrdersQuery } from '../redux/services/orderApi';
import { useLoading, Audio } from '@agney/react-loading';

const order_states = ['processing', 'accepted', 'in_delivery', 'delivered'];

const Admin = () => {
    const { token } = useSelector((state) => ({...state.auth}));
    const { data, isLoading } = usePendingOrdersQuery(token);
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="50" />
    });
    const navigate = useNavigate();


    return (
        <main className="admin-main wrapper">
            <Link to='/add-product' className='nice-btn' >Add New Product</Link>
            
            <h1>Pending Orders</h1>
            {isLoading ? 
            (
            <section className='loader-wrapper'  {...containerProps}>
                <div className="loader-content">
                    { indicatorEl }
                    <h2>Loading Please wait ....</h2>
                </div>
            </section>
            ) : (
                <>
                <br />
                {data?.length === 0 ? (<h2>No Orders to Show</h2>) : null}
                {data?.map(order => {
                    const { _id, createdAt, customer : {username, email} = {}, products, total_price, status, payment_method } = order;
                    
                    const handleUpdateStatus = () => {
                        const index = order_states.findIndex((el) => el === status);
                        if(index === -1) return;
                
                        fetch(`${import.meta.env.VITE_SERVER_URL}/order/${_id}`, {
                            method: 'PUT',
                            body: JSON.stringify({status: order_states[index + 1]}),
                            headers: {
                                'Content-Type': 'application/json',
                                'x-auth-token': token,
                            },
                        }).then((data) => navigate(`/orders/${_id}`)).catch((err) => console.log(err));
                    }
                    return (
                    <div key={_id}>
                        <p><strong>Order Id:</strong>&nbsp;<Link to={`/orders/${_id}`}>{_id}</Link></p>
                        <p><strong>Order By:</strong>&nbsp;{`${username} - ${email}`}</p>
                        <p><strong>Ordered on:</strong>&nbsp;{createdAt.split('T')[0]}</p>
                        <p><strong>Total Quantity:</strong>&nbsp;{products.length}</p>
                        <p><strong>Total Price:</strong>&nbsp;{total_price.toFixed(2)}</p>
                        <p><strong>Payment Method:</strong>&nbsp;{payment_method}</p>
                        <p><strong>Order Status:</strong>&nbsp;{status}</p>
                        <details style={{ minWidth: '50%'}}>
                        <summary>Products</summary>
                        <table style={{ marginTop: '1rem' }}>
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
                                <td>{total_price.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table> 
                    </details>
                    <div className="set-status">
                        <strong>Update Status:</strong> &nbsp; 
                        {status === order_states[0] ? <button onClick={handleUpdateStatus}  className='nice-btn'>Accept Order</button> : null}
                        {status === order_states[1] ? <button onClick={handleUpdateStatus} className='nice-btn'>In Delivery</button> : null}
                        {status === order_states[2] ? <button onClick={handleUpdateStatus} className='nice-btn'>Delivered</button> : null}
                    </div>
                    <hr/>
                    </div>
                    )
                })}
                </>
            ) }

        </main>
    )
}

export default Admin;