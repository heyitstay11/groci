import { useSelector } from "react-redux";
import { useAllOrdersQuery } from "../redux/services/orderApi";
import { Link } from 'react-router-dom';

const Orders = () => {
    const { token } = useSelector((state) => ({...state.auth}));
    const { data, isLoading } = useAllOrdersQuery(token);
    return (
        <main>
            <div className="wrapper single-order">
            <h1>All Orders</h1>
            <br />
                {data?.map(order => {
                    const { _id, createdAt, products, total_price, status, payment_method } = order;
                    return (
                    <>
                        <p><strong>Order Id:</strong>&nbsp;<Link to={`/orders/${_id}`}>{_id}</Link></p>
                        <p><strong>Ordered on:</strong>&nbsp;{createdAt.split('T')[0]}</p>
                        <p><strong>Total Quantity:</strong>&nbsp;{products.length}</p>
                        <p><strong>Total Price:</strong>&nbsp;{total_price.toFixed(2)}</p>
                        <p><strong>Payment Method:</strong>&nbsp;{payment_method}</p>
                        <p><strong>Order Status:</strong>&nbsp;{status}</p>
                        <br />
                        <hr/>
                        <br />
                    </>
                    )
                })}
            </div>
        </main>
    )
}

export default Orders;