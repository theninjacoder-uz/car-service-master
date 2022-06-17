import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import post1 from '../../images/footer/img-1.jpg'
import post2 from '../../images/footer/img-2.jpg'

import './style.css'

const FooterSection = () => {

    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }
 
     
    return(
        <div className="hx-site-footer-area">
            <div className="hx-site-footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-text">
                                <div className="hx-site-logo">
                                    <img src={logo} alt=""/>
                                </div>
                                <p>CAR-SERVICE-MASTER avto tamirlash ustahonasi har doim sizning xizmatingizda. Avtomobilingiz uchun kerakli bo'lgan barcha xizmatlarni amalga oshiradi.</p>
                                <div className="social">
                                    <ul className="d-flex">
                                        <li><Link onClick={ClickHandler} to="/home"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/home"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/home"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/home"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-link">
                                <h3>Oxirgi post</h3>
                                <div className="hx-latest-section">
                                    <div className="posts">
                                        <div className="post">
                                            <div className="img-holder">
                                               <img src={post1} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p><Link onClick={ClickHandler} to="/blog-details">Avtomobilingiz uchun eng muhim masala.</Link> </p>
                                                <span>18 Feb 2022</span>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src={post2} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p><Link onClick={ClickHandler} to="/blog-details">Avtomobilingiz uchun eng muhim masala.</Link></p>
                                                <span>18 Feb 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-adress">
                                <h3>Manzil</h3>
                                <div className="adress-section">
                                    <ul>
                                        <li>Bosh ofis manzili</li>
                                        <li>121 uy, Rudakiy ko'chasi, Samarkand </li>
                                        <li>Uzbekistan</li>
                                    </ul>
                                    <ul className="ad">
                                        <li><span>Telefon:</span> 998 99 7798667</li>
                                        <li><span>Email:</span> sherzodbek@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-t">
                            <div className="hx-site-footer-service">
                                <h3>Xizmatlar</h3>
                                <div className="service-section">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">Haqida</Link></li>
                                        <li><Link onClick={ClickHandler} to="/services">Xizmatlar</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-details">Yagona Xizmat</Link></li>
                                        <li><Link onClick={ClickHandler} to="/Pricing">Narxlash</Link></li>
                                        <li><Link onClick={ClickHandler} to="/testimonials">Sinovdan O'kazish</Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog-grid">Bloglar Roʻyxati</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hx-site-footer-bottom">
                <div className="container">
                    <div className="hx-site-footer-bottom-content">
                        <div className="row">
                            <div className="col-12">
                                <span>Maxfiylik siyosati| © 2022 <Link to="/home">Sherzod Asadullayev</Link> Barcha huquqlar himoyalangan.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default FooterSection;
