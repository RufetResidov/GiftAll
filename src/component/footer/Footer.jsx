import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import "./footer.scss"
import { FiPhoneCall } from 'react-icons/fi';
function Footer() {
    return (
        <footer className="footer-area ">
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget mb-4">
                                <div className="footer-title mb-3">
                                    <h4>GiftAll</h4>
                                </div>
                                <div className="footer-about">
                                    <div className="footer-contact mt-2">
                                        <ul>
                                            <li>
                                                <span> Address: </span>
                                                1418 Riverwood Drive, Suite 3245 Cottonwood,
                                                CA 96052, United States
                                            </li>
                                            <li><span>Telephone:</span> (012) 800 456 789-987 </li>
                                            <li><span>Email:</span> <a href="#">giftall@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="social-icon">
                                    <ul>
                                        <li><a className="#" href="#"><FaFacebookF /></a></li>
                                        <li><a className="#" href="#"><FaInstagram /></a></li>
                                        <li><a className="#" href="#"><FaTiktok /></a></li>
                                        <li><a className="#" href="#"><FaWhatsapp /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget mb-4">
                                <div className="footer-title mb-3">
                                    <h4>Get Help</h4>
                                </div>
                                <div className="footer-content">
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget mb-4">
                                <div className="footer-title mb-3">
                                    <h4>Information</h4>
                                </div>
                                <div className="footer-content">
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-title mb-3">
                                    <h4> Got Qustion ? Call Us 24/7 </h4>
                                </div>
                                <div class="footer-number">
                                    <div class="footer-number-image">
                                        <ImHeadphones />
                                    </div>

                                    <div class="footer-number-container">
                                        <h3>+994-51-332-18-97</h3>
                                    </div>
                                </div>
                                <div class="footer-details">
                                    <p class="font-light">Awesome grocery store website template
                                        Awesome grocery store website template</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 mb-3">
                            <div class="footer-bottom"></div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <p class="font-sm mb-0">© 2022,
                                <strong class="text-brand">GiftAll</strong>All rights reserved</p>
                        </div>
                        <div class="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div class="hotline d-lg-inline-flex mr-30">
                                <FiPhoneCall />
                                <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div class="hotline d-lg-inline-flex">
                                <FiPhoneCall />
                                <p>1900 - 8888<span>24/7 Support Center</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
