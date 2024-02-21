// InvitationSection.js
import React from 'react';
// import '../invitionSection.css';

const InvitationSection = () => {
    return (
        <section className="invitation-section">
            <div className='in-centre-text'>
                <h2>Wedding Invitation</h2>
                <div className="couple-info">
                    {/* <img src="couple-image.jpg" alt="Couple" /> */}
                    <h3>Couple's Name</h3>
                </div>
                <p className='date-time'>April 18, 2024</p>
                <p className='date-time'>Time: 6:00 PM</p>
            </div>
        </section>
    );
}

export default InvitationSection;