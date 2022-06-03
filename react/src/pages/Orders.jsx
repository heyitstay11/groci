import { useSelector } from "react-redux";
import { useAllOrdersQuery } from "../redux/services/orderApi";
import { Link } from 'react-router-dom';
import { useLoading, Audio } from "@agney/react-loading";

const Orders = () => {
    const { token } = useSelector((state) => ({...state.auth}));
    const { data, isLoading } = useAllOrdersQuery(token);
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="50" />
    })
    return (
        <main>
            <div className="wrapper single-order">
            <h1>All Orders</h1>
            <br />
            {isLoading ? 
            (
            <section {...containerProps}>
                { indicatorEl }
            </section>
            ) : (
                <>
                {!!!data ? (<h2>No Orders to Show</h2>) : null}
                {data?.map(order => {
                    const { _id, createdAt, products, total_price, status, payment_method } = order;
                    return (
                    <div key={_id}>
                        <p><strong>Order Id:</strong>&nbsp;<Link to={`/orders/${_id}`}>{_id}</Link></p>
                        <p><strong>Ordered on:</strong>&nbsp;{createdAt.split('T')[0]}</p>
                        <p><strong>Total Quantity:</strong>&nbsp;{products.length}</p>
                        <p><strong>Total Price:</strong>&nbsp;{total_price.toFixed(2)}</p>
                        <p><strong>Payment Method:</strong>&nbsp;{payment_method}</p>
                        <p><strong>Order Status:</strong>&nbsp;{status}</p>
                        <br />
                        <hr/>
                        <br />
                    </div>
                    )
                })}
                </>
            ) }
                
            </div>
        </main>
    )
}

export default Orders;