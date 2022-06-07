import '../css/products.css'
import { useProductsQuery } from "../redux/services/productApi";
import Card from '../components/Card';
import { useMemo, useState } from 'react';
import { useLoading, Audio } from '@agney/react-loading';

const Products = () => {
    const { data: productsData = [], isLoading, error } = useProductsQuery();
    const [filterPrice, setFilterPrice ] = useState(0);
    const [status, setStatus] = useState({ onSale: false, inStock: false, sort : '' });
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="50" />
    })

    const filteredData = useMemo(() => {
        let filteredProducts = productsData.slice();
        if(filterPrice){
            filteredProducts = filteredProducts.filter(product => product.price > filterPrice);
        }
        if(status.inStock){
            filteredProducts = filteredProducts.filter(product => product.quantity !== 0);
        }
        if(status.onSale){
            filteredProducts = filteredProducts.filter(product => product.sale !== 0);
        }
        if(status.sort === 'price'){
            filteredProducts.sort((a,b) => a.price - b.price);
        }
        if(status.sort === 'alphabetical'){
            filteredProducts.sort((a,b) => {
                if(a.title < b.title)    return -1;
                if(a.title > b.title)    return 1;
                return 0;
            });
        }
        return filteredProducts;
    }, [productsData, status, filterPrice]);

    const maxPrice = filteredData?.reduce((prev, curr) => {
        return prev >= curr?.price ? prev : curr?.price ;
    }, filterPrice[0]?.price);

return (
    <main className='product-main'>

    <h1 className="visually-hidden">Products</h1>
       
    <section className="product-container wrapper">

        <div className="product-controls">

            <form className="filter">

                <p>Filter By Price</p>
                <input className="price-range" step="20" value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} type="range" name="price" id="filter-price" min="0" max={maxPrice - 1 || 0}/>
                <div className="btn-container">
                    <button>Filter</button>
                    <span>Price ₹{filterPrice} - ₹{maxPrice}</span>
                </div>  

            </form>

            <div className="status">
                <p>Product Status</p>
                <input type="checkbox" onChange={e => setStatus(prev => ({...prev, onSale: e.target.checked}))} name="on_sale" id="on-sale" value={'on-sale'}/> <label htmlFor="on-sale">On Sale</label> <br/> 
                <input type="checkbox" onChange={e => setStatus(prev => ({...prev, inStock: e.target.checked}))} name="in_stock" id="in-stock" value={'in-stock'}/> <label htmlFor="in-stock">In Stock</label> <br/>
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
                        <select name="sort-by-category" defaultValue={'categories'} onChange={(e) => setStatus(prev => ({...prev, sort: e.target.value }))} >
                            <option value="categories" disabled >Sort By category</option>
                            <option value="price">Price</option>
                            <option value="alphabetical">Aphabetical</option>
                        </select>
                    </div>
                </div>

            </div>

            {isLoading? 
            (
                <section className='loader-wrapper'  {...containerProps}>
                    <div className="loader-content">
                        { indicatorEl }
                        <h2>Loading Please wait ....</h2>
                    </div>
                </section>
            )   :
            (
                <div className="product-grid">
                {filteredData?.map(item => {
                    const { sale, img, _id, title, quantity, price, desc } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price, desc }} />
                 })}
                </div>
            )}
    
        </div>


    </section>          

    </main>
)
}

export default Products;