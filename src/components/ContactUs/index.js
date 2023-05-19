import React from 'react'
import './contactUs.css';
import PrimaryButton from '../Buttons/Primary';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
        <div className="contact-us-content">
            <div className="contact-us-heading">
                Got Questions? <br /><span className="highlighted-text">Contact Us</span>
            </div>
            <div className="contact-us-form">
                <div className="contact-us-form-item">
                    <input type="text" className="input-element" placeholder="Name" />
                </div>
                <div className="contact-us-form-item">
                    <input type="text" className="input-element" placeholder="Email" />
                </div>
                <div className="contact-us-form-item">
                    <textarea className="input-element" placeholder="Subject" style={{height: 150, resize: 'none'}}></textarea>
                </div>
                <div className="contact-us-form-item">
                    <div className="submit-btn">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs