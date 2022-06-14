import { Audio, useLoading } from '@agney/react-loading';
import Card from '../components/Card';
import { useProductsQuery } from '../redux/services/productApi';

const Home = () => {
    const { data: productsData = [], isLoading, error } = useProductsQuery();
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <Audio width="100" />
    })

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
                {productsData?.slice(0, 8).map(item => {
                    const { sale, img, _id, title, quantity, price, desc } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price, desc }} />
                 })}
                </div>
            )}

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
                {productsData?.slice(-4).map(item => {
                    const { sale, img, _id, title, quantity, price, desc } = item;

                    return <Card key={_id} {...{sale, img, _id, title, quantity, price, desc }} />
                 })}
                </div>
            )}

            </section>


            <section className="services">
                <div className="services-content wrapper">

                    <div className="item">
                        <div className="img-container">
                            <img src="../imgs/cart.svg" alt="" />
                        </div>
                        <div className="desc">
                            <p className="title">Great Deals</p>
                            <p className="sub-title">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img-container">
                            <img src="../imgs/cart.svg" alt="" />
                        </div>
                        <div className="desc">
                            <p className="title">Great Deals</p>
                            <p className="sub-title">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img-container">
                            <img src="../imgs/cart.svg" alt="" />
                        </div>
                        <div className="desc">
                            <p className="title">Great Deals</p>
                            <p className="sub-title">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                </div>
            </section>

    </main>
    )
}

export default Home;