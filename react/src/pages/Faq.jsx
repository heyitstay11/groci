import '../css/faq.css'

const Faq = () => {
    return (
        <main>

        <div className="banner">
            <h1>FAQ</h1>
            <p className="bread-crumbs">Home / Faq</p>
        </div>

        <section className="wrapper faq-details">

            <div className="accordion-container">
                <details open="true">
                    <summary>Where can i buy peanuts?</summary>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio quidem minus quas, atque sapiente. Incidunt excepturi commodi amet nobis!
                    </p>
                </details>
                <details>
                    <summary>Which brand sells the best peanuts?</summary>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio quidem minus quas, atque sapiente. Incidunt excepturi commodi amet nobis!
                    </p>
                </details>
                <details>
                    <summary>Is peanut healthy?</summary>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio quidem minus quas, atque sapiente. Incidunt excepturi commodi amet nobis!
                    </p>
                </details>
            </div>

            <div className="faq-form-contact">
                <form>
                    <h2>Ask Us A Question</h2>
                    <div className="input-group">
                        <label htmlFor="name" className="visually-hidden">Your Name</label>
                        <input type="text" placeholder="Your Name" autoComplete='username' />
                        <label htmlFor="email" className="visually-hidden">Your Email</label>
                        <input type="email" placeholder="Your Email" autoComplete='email'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="subject" className="visually-hidden">Subject</label>
                        <input type="text" placeholder="Subject"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message" className="visually-hidden">Your Mesage</label>
                        <textarea name="message" placeholder="Your Message" id="" cols="30" rows="8"></textarea>
                    </div>
                    <div className="input-group">
                        <button>Send Message</button>
                    </div>
                </form>
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

export default Faq;