import '../css/contact.css';

const Contact = () => {
    return (
        <main>

        <div className="banner">
            <h1>Contact Us</h1>
            <p className="bread-crumbs">Home / Contact</p>
        </div>

        <section className="wrapper contact-details-cc">

            <div className="contact-container-cc">
              <h2>Get In Touch</h2>

              <div className="contact-group">
                  <strong className="icon-link">Address</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis.</p>
              </div>
              
              <div className="contact-group">
                  <strong className="icon-link">Mobile</strong>
                  <p>(+20) 220 123 4567, +91 12345 67890</p>
              </div>

              <div className="contact-group">
                  <strong className="icon-link">Phone</strong>
                  <p>(+20) 220 123 4567, +91 12345 67890</p>
              </div>
              
              <div className="contact-group">
                  <strong className="icon-link">Email</strong>
                  <p>testermail@mail.com, contacttest@mail.com</p>
              </div>

              <div className="contact-group">
                  <strong className="icon-link">Website</strong>
                  <p>http://locahost:8080</p>
              </div>

            </div>

            <div className="map">
                <iframe id='map-iframe' style={{ border: 0 }} width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080692193424!2d80.29172299999996!3d13.098675000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x298011b0b0d14d47!2sTransvelo!5e0!3m2!1sen!2sin!4v1412844527190"></iframe>
            </div>


        </section>

        <div className="faq-form-contact  wrapper contact-form-cc">
            <form>
                <h2>Contact Us</h2>
                <div className="input-group">
                    <label htmlFor="name" className="visually-hidden">Your Name</label>
                    <input type="text" placeholder="Your Name" />
                    <label htmlFor="email" className="visually-hidden">Your Email</label>
                    <input type="email" placeholder="Your Email"/>
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

    </main>
    )
}

export default Contact;