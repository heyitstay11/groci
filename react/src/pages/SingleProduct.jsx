import { useParams, Link } from "react-router-dom";
import { useProductQuery } from "../redux/services/productApi";
import '../css/single_product.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../redux/services/cartSlice";

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useProductQuery(id);
    const { isAdmin } = useSelector((state) => ({...state.auth}));
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const { _id, title, quantity, sale , img, desc } = data || {};
    const salePrice = data ? data.price - Number((data.price * (data.sale / 100)).toFixed(2)): null;

    const handleChange = (e) => {
        setCount(e.target.value)
    }

    const handleAddToCart = () => {
        if(!count || count > data.quantity) return;
        dispatch(addProduct({ _id, title, count: +count, max_quantity: quantity, price: salePrice , sale , img, desc }));
    }

    return (
        <main>
            {data && 
            <div className="single-product wrapper">
                <div className="img-wrapper">
                    <img src={data.img} alt="" height={400} />
                </div>
                <div className="content-wrapper">
                    <div className="sale-tag">{data.sale}% OFF</div>
                    <div className="title">{data.title}</div>
                    <div className="price-tag">
                        <s><span className="price">${data.price}</span></s>
                        <span className="saleprice">&nbsp;${salePrice}</span>
                    </div>
                    <div className="btn-container">
                        <input type="number"  value={count} onChange={handleChange} />
                        <button className="nice-btn" onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="desc">
                        <div className="head">Quick Overview</div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, impedit?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis voluptatem tempora, molestias, ad, eaque consequatur id dolores quaerat omnis fuga quas aspernatur recusandae totam quibusdam quidem quo incidunt molestiae?</p>
                    </div>
                    <br />
                    {isAdmin ? (
                        <Link className="nice-btn" to={`/edit-product/${id}`} >Edit {title}</Link>
                    ) : null}
                </div>
            </div>
            }
        </main>
    )
}

export default SingleProduct;