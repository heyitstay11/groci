import '../css/products.css'
import { useProductsQuery } from "../redux/services/productApi";
import Card from '../components/Card';

const Products = () => {
    const { data, isLoading, error } = useProductsQuery();

return (
    <main className='product-main'>

    <h1 className="visually-hidden">Products</h1>
       
    <section className="product-container wrapper">

        <div className="product-controls">

            <div className="filter">

                <p>Filter By Price</p>
                <input className="price-range" step="1" type="range" name="price" id="" min="0" max="100"/>
                <div className="btn-container">
                    <button>Filter</button>
                    <span>Price $0 - $40</span>
                </div>  

            </div>

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
                {isLoading ? (<h2>Loading, please wait ...</h2>):
                data?.map(item => {
                    const {sale, img, _id, title, quantity, price } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price }} />
                })}
            </div>
    
        </div>


    </section>          

    </main>
)
}

export default Products;