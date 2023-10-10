import React from 'react'
import './contact.css'
import map from '../assets/map.png'
import mail from '../assets/mail-icon.png'
import phone from '../assets/phone-icon.png'
import location from '../assets/location.png'
import social from '../assets/social.png'




const Contact = () => {
  return (
    <div className="contact-section-wrapper">
    <div className="contact-section-top">
      <h1 className="heading">Contact Us</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit
      </p>
      
    </div>
    <div className="contact-section-bottom">
   
    <div className="contact-banner-container">
        <div className="contact-form">
      <h2 className="form-heading">Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        
        <button className="secondary-button" type="submit">
          Send
        </button>
      </form>
      
    </div>
        </div>
        <div className="feature-image-section">
        <div className="contact-info-icons">
        <div className="contact-info">
          <img src={location} alt="" />
          <p>Location: 123 Main St, City</p>
        </div>
        <div className="contact-info">
          <img src={phone} alt="" />
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="contact-info">
          <img src={mail} alt="" />
          <p>Email: example@example.com</p>
        </div>
       
        </div>
          <div className='map'>

          <img src={map} alt="" style={{width:"350px",height:"230px"}} />
          </div>
          <img src={social} alt="" style={{alignItems:"start"}}/>
        </div>
      </div>
    </div>


  )
}

export default Contact