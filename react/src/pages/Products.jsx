import '../css/products.css'
import Card from '../components/Card';

const Products = () => {
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
                {[1,2,3,4,5,6,7,8,9].map(item => {
                    return (
                        <Card key={item} />
                    )
                })}
            </div>
        </div>


    </section>          

    </main>
)
}

export default Products;