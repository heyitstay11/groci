import '../css/products.css'

const Products = () => {
return (
    <main className='product-main'>

    <h1 class="visually-hidden">Products</h1>
       
    <section class="product-container wrapper">

        <div class="product-controls">

            <div class="filter">

                <p>Filter By Price</p>
                <input class="price-range" step="1" type="range" name="price" id="" value="0" min="0" max="100"/>
                <div class="btn-container">
                    <button>Filter</button>
                    <span>Price $0 - $40</span>
                </div>  

            </div>

            <div class="status">
                <p>Product Status</p>
                <input type="checkbox" name="on-sale" id="on-sale"/> <label for="on-sale">On Sale</label> <br/> 
                <input type="checkbox" name="in-stock" id="in-stock"/> <label for="in-stock">In Stock</label> <br/>
            </div>
           
        </div>

        <div class="product-grid-container">
            
            <div class="product-banner">
                
                <div class="dark-brand">
                    <img src="../imgs/cart.svg" alt="" height="40"/>
                    <h2>Quality & Freshness Guaranteed!</h2>
                </div>

                <div class="product-view-controls">
                    <div class="view-btn-container">
                        <button>Grid</button>
                        <button>List</button>
                    </div>

                    <div class="sort-controls">
                        <label for="sort-by-category" class="visually-hidden">Sort By Categories</label>
                        <select name="sort-by-category" id="">
                            <option value="categories" selected disabled >Sort By category</option>
                            <option value="price">Price</option>
                            <option value="stock">Stock</option>
                            
                        </select>
                    </div>
                </div>

            </div>


            <div class="product-grid">

                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input value="1" type="text"/>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input value="1" type="text"/>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input value="1" type="text"/>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input type="text" value="1" />
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input value="1" type="text"/>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input value="1" type="text"/>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input value="1" type="text"/>
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div class="card">
                    <div class="top">
                        <span class="sale-tag">17%</span>
                        <span class="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div class="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div class="title">Organic Sweet Corn</div>
                    <div class="stock"> <span class="tick-icon">/</span>In Stock <span class="available">1kg</span></div>
                    <div class="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <input type="text" value="1" />
                        <button class="increment">+</button>
                    </div>
                    <button class="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
            </div>
        </div>


    </section>          

    </main>
)
}

export default Products;