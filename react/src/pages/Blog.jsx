import '../css/blog.css';

const Blog = () => {
    return (
        <main className="blog-main">

        <h1 className="visually-hidden">Blog</h1>
           
         <section className="blog wrapper">
    
            <ul className="blog-list">
    
                <li>
                    <article className="blog-card">
                        <figure>
                            <img src="../imgs/sale-img.webp" alt=""/>
                        <figcaption>
                            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
                            <div className="blog-info">
                                <span>August 10 2021</span>
                                <span className="icon-link tag-icon invert">gallery, news, video</span>
                            </div>
                            <p className="blog-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus, placeat harum optio 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus, placeat harum optio 
                            </p>
                            <a  href="#!">Read More</a>
                        </figcaption>
                        </figure>
                    </article>
                </li>
    
                <li>
                    <article className="blog-card">
                        <figure>
                            <img src="../imgs/sale-img.webp" alt=""/>
                            <figcaption>
                                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
                                <div className="blog-info">
                                    <span>August 10 2021</span>
                                    <span className="icon-link tag-icon invert">gallery, news, video</span>
                                </div>
                                <p className="blog-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus, placeat harum optio 
                                </p>
                                <a href="#!">Read More</a>
                            </figcaption>
                        </figure>
                    </article>
                </li>
    
            </ul>
    
            <aside className="blog-sidebar">
    
                <div className="search">
                    <label htmlFor="search" className="visually-hidden">Search Blog</label>
                    <input id='search' placeholder="Search here" type="text"/>
                    <button>Search</button>
                </div>
    
                <div className="blog-categories">
                    <h3>Categories</h3>
                    <ul className="category-list">
                        <li>Audio</li> 
                        <li>Gallery</li> 
                        <li>Video</li> 
                        <li>Image</li> 
                    </ul>
                </div>
    
                <div className="newsletter">
                    <h3>Newsletter</h3>
                    <div className="input-group">
                        <label htmlFor="email" className="visually-hidden">Your Email Address</label>
                        <input id='email' placeholder="Your Email " type="text"/>
                        <button>Sign Up</button>
                    </div>
                </div>
            </aside>
    
         </section>
    
        </main>
    )
}

export default Blog;