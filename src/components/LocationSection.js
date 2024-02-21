// LocationSection.js
import React from 'react';
import '../locationSection.css';

const LocationSection = () => {
    return (
        <section className="location-section">
            <div className='loc-centre-text'>
                <h2>Wedding Location</h2>
                <div className="location-info">
                    <p>Delhi, India</p>
                    {/* You can integrate Google Maps here */}
                    <iframe
                        title="Wedding Venue Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27970.597041350633!2d77.11544014637187!3d28.79939833671422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d00468e14b6e5%3A0x7ec2343edae88419!2sAlipur%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708490338460!5m2!1sen!2sin"
                        width="80%vw"
                        height="150"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default LocationSection;
