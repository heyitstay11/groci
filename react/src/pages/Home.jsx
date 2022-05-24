const Home = () => {
    return (
        <main>

        <section className="sales">
            <img src="../imgs/sale-img.webp" alt=""/>
        </section>

        {/* <section className="categories">
            <div className="glider-contain">
                <div className="glider cats">
                    <figure>
                        <img src="../imgs/avatar.svg" height="50" alt=""/>
                        <figcaption>Fruits</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg"  height="50" alt=""/>
                        <figcaption>Vegetables</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg" height="50"  alt=""/>
                        <figcaption>Dairy</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg"  height="50" alt=""/>
                        <figcaption>Meat</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg" height="50"  alt=""/>
                        <figcaption>Ready to eat</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg" height="50" alt=""/>
                        <figcaption>Fruits</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg"  height="50" alt=""/>
                        <figcaption>Vegetables</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg" height="50"  alt=""/>
                        <figcaption>Dairy</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg"  height="50" alt=""/>
                        <figcaption>Meat</figcaption>
                    </figure>
                    <figure>
                        <img src="../imgs/avatar.svg" height="50"  alt=""/>
                        <figcaption>Ready to eat</figcaption>
                    </figure>
                </div>

                <button aria-label="Previous" className="glider-prev"><img src="../imgs/prev.svg" height="40" alt=""></button>
                <button aria-label="Next" className="glider-next"><img src="../imgs/next.svg" height="40" alt=""></button>
                <div role="tablist" className="dots"></div>
            </div>
        </section> */}

        <section className="top-deals wrapper">

        <div className="top-deals-heading">
            <p>Top Savers Today <span className="blue-highlight">20% OFF</span></p>
            <a href="#!">View All</a>
        </div>

        <div className="product-grid">

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input value="1" type="number"/>
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input value="1" type="number"/>
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input value="1" type="number"/>
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input type="number" value="1" />
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input value="1" type="number"/>
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input value="1" type="number"/>
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input value="1" type="number"/>
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

            <div className="card">
                <div className="top">
                    <span className="sale-tag">17%</span>
                    <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                </div>
                <div className="img">
                    <img src="../imgs/sale-img.webp"  alt=""/>
                </div>
                <div className="title">Organic Sweet Corn</div>
                <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                <div className="counter">
                    <button className="decrement">-</button>
                    <input type="number" value="1" />
                    <button className="increment">+</button>
                </div>
                <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
            </div>

        </div>

        </section>

        <section className="posters wrapper">
            <img src="../imgs/sale-img.webp" alt=""/>
            <img src="../imgs/sale-img.webp" alt=""/>
        </section>

        <section className="top-deals wrapper">

            <div className="top-deals-heading">
                <p>Best Offers Today <span className="blue-highlight">25% OFF</span></p>
                <a href="#!">View All</a>
            </div>
    
            <div className="product-grid">
    
                <div className="card">
                    <div className="top">
                        <span className="sale-tag">17%</span>
                        <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div className="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div className="title">Organic Sweet Corn</div>
                    <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                    <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div className="counter">
                        <button className="decrement">-</button>
                        <input value="1" type="number"/>
                        <button className="increment">+</button>
                    </div>
                    <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
    
                <div className="card">
                    <div className="top">
                        <span className="sale-tag">17%</span>
                        <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div className="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div className="title">Organic Sweet Corn</div>
                    <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                    <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div className="counter">
                        <button className="decrement">-</button>
                        <input value="1" type="number"/>
                        <button className="increment">+</button>
                    </div>
                    <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
                
                <div className="card">
                    <div className="top">
                        <span className="sale-tag">17%</span>
                        <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div className="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div className="title">Organic Sweet Corn</div>
                    <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                    <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div className="counter">
                        <button className="decrement">-</button>
                        <input value="1" type="number"/>
                        <button className="increment">+</button>
                    </div>
                    <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>

                <div className="card">
                    <div className="top">
                        <span className="sale-tag">17%</span>
                        <span className="veg-icon"><img src="../imgs/green-dot.svg" alt=""/></span>
                    </div>
                    <div className="img">
                        <img src="../imgs/sale-img.webp"  alt=""/>
                    </div>
                    <div className="title">Organic Sweet Corn</div>
                    <div className="stock"> <span className="tick-icon">/</span>In Stock <span className="available">1kg</span></div>
                    <div className="price"><s>$18.00</s> <strong>$14.00</strong></div>
                    <div className="counter">
                        <button className="decrement">-</button>
                        <input value="1" type="number"/>
                        <button className="increment">+</button>
                    </div>
                    <button className="add-cart"> <img src="../imgs/cart.svg" alt=""/> Add to cart</button>
                </div>
            </div>

            </section>


            <section className="services">
                <div className="services-content wrapper">

                    <div className="item">
                        <div className="img-container">
                            <img src="../imgs/cart.svg" alt="" />
                        </div>
                        <div className="desc">
                            <p className="title">Great Delas</p>
                            <p className="sub-title">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img-container">
                            <img src="../imgs/cart.svg" alt="" />
                        </div>
                        <div className="desc">
                            <p className="title">Great Delas</p>
                            <p className="sub-title">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img-container">
                            <img src="../imgs/cart.svg" alt="" />
                        </div>
                        <div className="desc">
                            <p className="title">Great Delas</p>
                            <p className="sub-title">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                </div>
            </section>

    </main>
    )
}

export default Home;