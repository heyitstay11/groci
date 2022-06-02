import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useOrderQuery } from "../redux/services/orderApi";
import { useLoading, Audio} from '@agney/react-loading';

const SingleOrder = () => {
    const { id } = useParams();
    const { token } = useSelector((state) => ({...state.auth}));
    const { data: orderData, isLoading} = useOrderQuery({ token, id });
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="50" />
    })

    return (
        <main>
            <div className="wrapper single-order"  >
                <h1>Your Order</h1>
                {isLoading ? 
                <section {...containerProps}>
                    { indicatorEl }
                </section>:
                <>
                    <p><strong>Order Id:</strong>&nbsp;{orderData._id}</p>
                    <p><strong>Ordered on:</strong>&nbsp;{orderData.createdAt.split('T')[0]}</p>
                    <p><strong>Total Quantity:</strong>&nbsp;{orderData.products.length}</p>
                    <p><strong>Total Price:</strong>&nbsp;{orderData.total_price}</p>
                    <p><strong>Payment Method:</strong>&nbsp;{orderData.payment_method}</p>
                    <p><strong>Order Status:</strong>&nbsp;{orderData.status}</p>
                    
                        <details open style={{ minWidth: '50%'}}>
                        <summary>Products</summary>
                        <table style={{ marginTop: '1rem' }}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Subtotal ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.products?.map((product) => {
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
                                <td>{orderData.total_price.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table> 
                    </details>
                </>
                  }
            </div>
        </main>
    )
}

export default SingleOrder;