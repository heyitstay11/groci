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
                  <strong className="icon-link address-svg">Address</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis.</p>
              </div>
              
              <div className="contact-group">
                  <strong className="icon-link call-svg">Mobile</strong>
                  <p>(+20) 220 123 4567, +91 12345 67890</p>
              </div>

             
              <div className="contact-group">
                  <strong className="icon-link mail-svg">Email</strong>
                  <p>testermail@mail.com, contacttest@mail.com</p>
              </div>

              <div className="contact-group">
                  <strong className="icon-link website-svg">Website</strong>
                  <p><a href="https://tayyabv011.netlify.app/">https://tayyabv011.netlify.app/</a></p>
              </div>

            </div>

            <div className="map">
                <iframe id='map-iframe' style={{ border: 0 }} width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d120700.30789369083!2d72.78321644199156!3d19.024805157156056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.9546445!2d72.8386586!4m5!1s0x3be7c994afbc6de9%3A0xd36760e4a1a77177!2sjhu%20chowpatty!3m2!1d19.0974187!2d72.8264476!5e0!3m2!1sen!2sin!4v1654586222870!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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