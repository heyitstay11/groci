const About = () => {
    return (
        <main className="about-main">
        
        <div className="banner">
            <h1>About Us</h1>
            <p className="bread-crumbs">Home / About Us</p>
        </div>

        <section className="about-us">
            <div className="about-us-content wrapper">
                <img src="../imgs/about-us-1.webp" alt="" height="500" width="450" />
                <div className="description">
                    <h2>
                        Save More with GO! We give you the lowest pricest on all the grocery
                    </h2>
    
                    <strong>Our Vision</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis soluta molestiae ut, sint fugit eos sapiente labore. Qui veniam ab nulla repudiandae velit explicabo, omnis in labore tempora sunt?</p>
                    
                    <strong>Our Goal</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis soluta molestiae ut, sint fugit eos sapiente labore. Qui veniam ab nulla repudiandae velit explicabo, omnis in labore tempora sunt?</p>
    
                </div>
            </div>
        </section>

        <section className="services-about">
            <h2>What we provide</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            <div className="services-content-about wrapper">
               
                <div className="item">
                    <img src="../imgs/cart.svg" alt="" height="50"/>
                    <h3>Title 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum laboriosam eius, voluptas accusamus tenetur eum culpa impedit odit!</p>
                </div>
               
                <div className="item">
                    <img src="../imgs/cart.svg" alt="" height="50"/>
                    <h3>Title 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum laboriosam eius, voluptas accusamus tenetur eum culpa impedit odit!</p>
                </div>
               
                <div className="item">
                    <img src="../imgs/cart.svg" alt="" height="50"/>
                    <h3>Title 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit accusamus tenetur eum culpa impedit odit!</p>
                </div>
               
                <div className="item">
                    <img src="../imgs/cart.svg" alt="" height="50"/>
                    <h3>Title 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum laboriosam eius, voluptas accusamus tenetur eum culpa impedit odit!</p>
                </div>
               
                <div className="item">
                    <img src="../imgs/cart.svg" alt="" height="50"/>
                    <h3>Title 5</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum laboriosam eius,  impedit odit!</p>
                </div>
               
                <div className="item">
                    <img src="../imgs/cart.svg" alt="" height="50"/>
                    <h3>Title 6</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. pa impedit odit!</p>
                </div>

            </div>

        </section>


        <section className="team">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            <div className="team-content wrapper">
               
                <div className="item">
                    <img src="../imgs/person-1.webp" alt="" height="100"/>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur  eum culpa impedit odit!</p>
                    <p className="name"> - John Doe</p>
                    <p className="work">Marketing</p>
                </div>

                <div className="item">
                    <img src="../imgs/person-1.webp" alt="" height="100"/>
                    <p className="desc">Lorem ipsum dolor sit  eum culpa impedit odit!</p>
                    <p className="name"> - John Doe</p>
                    <p className="work">Marketing</p>
                </div>
                
                <div className="item">
                    <img src="../imgs/person-1.webp" alt="" height="100"/>
                    <p className="desc">Lorem ipsum dolor sit amet elit eum culpa impedit odit!</p>
                    <p className="name"> - John Doe</p>
                    <p className="work">Marketing</p>
                </div>
               
               
            </div>

        </section>

    </main>

    )
}

export default About;