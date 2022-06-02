import '../css/products.css'
import { useProductsQuery } from "../redux/services/productApi";
import Card from '../components/Card';
import { useState } from 'react';
import { useLoading, Audio } from '@agney/react-loading';

const Products = () => {
    const { data, isLoading, error } = useProductsQuery();
    const [filterPrice, setFilterPrice ] = useState(0);
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="50" />
    })

    const handleFilter = (e) => {
        e.preventDefault();
    }

return (
    <main className='product-main'>

    <h1 className="visually-hidden">Products</h1>
       
    <section className="product-container wrapper">

        <div className="product-controls">

            <form className="filter">

                <p>Filter By Price</p>
                <input className="price-range" step="20" value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} type="range" name="price" id="filter-price" min="0" max="100"/>
                <div className="btn-container">
                    <button onClick={handleFilter}>Filter</button>
                    <span>Price ${filterPrice} - $100</span>
                </div>  

            </form>

            <div className="status">
                <p>Product Status</p>
                <input type="checkbox" name="on-sale" id="on-sale"/> <label htmlFor="on-sale">On Sale</label> <br/> 
                <input type="checkbox" name="in-stock" id="in-stock"/> <label htmlFor="in-stock">In Stock</label> <br/>
            </div>
           
        </div>

        <div className="product-grid-container">
            
            <div className="product-banner">
                
                <div className="dark-brand">
                    <img src="../imgs/cart.svg" alt="" height="40"/>
                    <h2>Quality & Freshness Guaranteed!</h2>
                </div>

                <div className="product-view-controls">
                    <div className="view-btn-container">
                        <button>Grid</button>
                        <button>List</button>
                    </div>

                    <div className="sort-controls">
                        <label htmlFor="sort-by-category" className="visually-hidden">Sort By Categories</label>
                        <select name="sort-by-category" id="">
                            <option value="categories" disabled >Sort By category</option>
                            <option value="price">Price</option>
                            <option value="stock">Stock</option>
                            
                        </select>
                    </div>
                </div>

            </div>

            <div className="product-grid">
                {isLoading ? 
                ( 
                <section {...containerProps}>
                    { indicatorEl }
                </section>
                ):
                data?.map(item => {
                    const { sale, img, _id, title, quantity, price, desc } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price, desc }} />
                })}
            </div>
    
        </div>


    </section>          

    </main>
)
}

export default Products;