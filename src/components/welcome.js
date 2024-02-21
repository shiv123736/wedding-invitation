
import React from 'react';
import '../css/welcome.css';
import { useEffect, useRef } from 'react';
import AAudio from '../assets/mp3/asd.mp3';
import invitation1 from '../assets/img/jkl.gif';
import invitation2 from '../assets/img/cvb.gif';
import invitation3 from '../assets/img/bvc.gif';
import invitation4 from '../assets/img/ggg.gif';
import invitation_card from '../assets/SI.pdf';
import SVG from './svg';
import SakuraFallingAnimation from './SakuraFallingAnimation';



const Welcome = () => {
    useEffect(() => {
        const audio = new Audio(AAudio); // Create a new Audio object with the path to your mp3 file
        const playAudio = () => {
            audio.play(); // Play the audio when this function is called
        };

        const pauseAudio = () => {
            audio.pause(); // Pause the audio when this function is called
        };

        document.addEventListener('click', playAudio); // Add event listener to play audio when user interacts with the page
        // document.addEventListener('scroll', playAudio);

        return () => {
            // Clean up: remove event listener and pause audio when component unmounts
            document.removeEventListener('click', playAudio);
            audio.pause();
        };
    }, []);


    return (
        <div className="welcome-section">
            <SakuraFallingAnimation />
            <img src="https://i.imgur.com/dGOOfnA.png" alt="top-right" className="top-right-decoration" />
            <img src="https://i.imgur.com/t6ffnbn.png" alt="top-left" className="top-left-decoration" />
            <section id="media"></section>
            <div className="title">
                <p><b>।।श्री महावीराय नमः।। </b></p>
                <h1>Prince</h1>
                <h2>❤️AND❤️</h2>
                <h1>Anjali</h1>
                <h3>Are getting married</h3>
                <p>on <span className="date">18 April 2024</span>, At <span className="place">Saheed samarak</span> Haripur[Alipur], Delhi</p>


                <SVG />
            </div>


            <div id="time"></div>
            <p className="dance-med">
                dinner & dancing to follow
            </p>

            <div className="actions">
                <a href={invitation_card} target="_blank" download>
                    <div className="venue">DOWNLOAD INVITATION CARD</div>
                </a>
            </div>

            <p className="footer">
                Can't wait to celebrate auspicious moment of our family with you! <br />
                Ping me for queries: +91 8285171814
                <span>
                    <a href="https://api.whatsapp.com/send?phone=919013239430&utm_source=Messaging&utm_medium=Whatsapp" target="_blank" className="social-icon" title="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 -8 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </a>
                </span>
            </p>

            <p>How do I get there?</p>
            <div className="actions">
                <a href="https://maps.app.goo.gl/M4fX1HDTH1s1airx8" target="_blank">
                    <div className="venue">SEE THE VENUE</div>
                </a>
            </div>

            <div className="wrapper">
                <section id="section1">
                    <div className="item">
                        <img src={invitation1} alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src={invitation1} alt="Describe Image" />
                        {/* <img src="./assets/img/Invitation (1).png" alt="Describe Image" /> */}
                    </div>
                    <div className="item">
                        <img src={invitation2} alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src={invitation3} alt="Describe Image" />
                        {/* <img src="./assets/img/Invitation (2).png" alt="Describe Image" /> */}
                    </div>
                    <div className="item">
                        <img src={invitation3} alt="Describe Image" />
                    </div>
                </section>


            </div>
            <div>
                <p className="happiness">Join us in our happiness!<br />
                    <a href="https://twitter.com/sarcastic_sark" target="_blank" className="twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                </p>
                <div className="savethedate">
                    <img className="savethedate_image" src={invitation4} alt="" />
                </div>
                <p className="footer">With the divine grace of the almighty,
                    I cordially invite you and your family to
                    my elder brother's wedding
                    <br /><br />
                    I'd eagerly await your kind presence in the auspicious occasion of my family.
                </p>
            </div>
            <div>
                <div className='hindi'>
                <blockquote>हल्दी है चंदन है रिश्तों का बंधन है ।<br />पुरा परिवार सहित आपका हार्दिक अभिनंदन है ।।</blockquote>

                </div>
                <div className="actions">
                    <a href="#top">
                        <div className="venue"><b>^ TOP ^</b></div>
                    </a>
                </div>
                <br />
                Crafted with lots of love ❤️ by Shivam
            </div>
        </div>
    );
}

export default Welcome;
