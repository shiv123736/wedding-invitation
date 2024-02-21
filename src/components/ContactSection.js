// ContactSection.js
import React from 'react';
import '../contactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className='con-centre-text'>
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>Email: example@example.com</p>
                <p>Phone: +91 1234567890</p>
            </div>
            </div>
        </section>
    );
}

export default ContactSection;
