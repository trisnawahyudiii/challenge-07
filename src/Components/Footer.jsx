import React from 'react';

const logo = 'images/logo.png';
const facebook = 'images/icons/icon_facebook.png';
const instagram = 'images/icons/icon_instagram.png';
const twitter = 'images/icons/icon_twitter.png';
const mail = 'images/icons/icon_mail.png';
const twitch = 'images/icons/icon_mail.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-md d-flex flex-column flex-lg-row justify-content-between mt-5 mb-3 footer-container">
                <div className="address footer-child">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>

                <div className="navigation d-flex flex-column footer-child">
                    <ul>
                        <li>
                            <a href="#our-services"> Our services</a>
                        </li>
                        <li>
                            <a href="#why-us">Why Us </a>
                        </li>
                        <li>
                            <a href="#testimonial">Testimonial </a>
                        </li>
                        <li>
                            <a href="#faq-section">FAQ </a>
                        </li>
                    </ul>
                </div>

                <div className="sosmed footer-child">
                    <p>Connect with us</p>
                    <div className="icon-container d-flex">
                        <img className="sosmed-icon" src={facebook} alt="facebook-icon" />
                        <img className="sosmed-icon" src={instagram} alt="instagram-icon" />
                        <img className="sosmed-icon" src={twitter} alt="twitter-icon" />
                        <img className="sosmed-icon" src={mail} alt="mail-icon" />
                        <img className="sosmed-icon" src={twitch} alt="twitch-icon" />
                    </div>
                </div>

                <div className="copyright footer-child">
                    <p>Copyright Binar 2022</p>
                    <a href="#hero-section">
                        <img src={logo} alt="Company-Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
