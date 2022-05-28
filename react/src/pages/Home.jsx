// import { useProductsQuery } from "../redux/services/productApi";
import Card from '../components/Card';

const Home = () => {
    // const { data } = useProductsQuery();

    return (
        <main>

        <section className="sales">
            <img src="../imgs/sale-img.webp" alt=""/>
        </section>

        <section className="top-deals wrapper">

        <div className="top-deals-heading">
            <p>Top Savers Today <span className="blue-highlight">20% OFF</span></p>
            <a href="#!">View All</a>
        </div>

        <div className="product-grid">
            {[1,2,3,4,5,6,7,8].map(item => {
               return (
                   <Card key={item}/>
               )
            })}
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
                {[11,21,31,41].map(item => {
                return (
                    <Card key={item}/>
                )
                })}
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