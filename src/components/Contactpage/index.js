import React from 'react';
import ContactForm from '../CommentForm'
import ct1 from '../../images/contact/img-1.png'
import './style.css'

const Contactpage = () => {

    return(
        <div className="contact-page-area">
            <div className="hx-contact-area-s2 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="hx-contact-img">
                                <img src={ct1} alt=""/>
                            </div>
                        </div>
                        <div className="col col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="hx-contact-content">
                                <h2>Aloqa qiling</h2>
                                <div className="hx-contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hx-contact-grid-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="hx-contact-gd-wrap">
                                <div className="hx-contact-gd-icon">
                                    <i className="fi flaticon-call"></i>
                                </div>
                                <div className="hx-contact-gd-text">
                                    <h4>Bizga hozir qo'ng'iroq qiling</h4>
                                    <span>+(998) 99 7798667 </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="hx-contact-gd-wrap">
                                <div className="hx-contact-gd-icon">
                                    <i className="fi flaticon-message"></i>
                                </div>
                                <div className="hx-contact-gd-text">
                                    <h4>Bugun bizga xat yuboring</h4>
                                    <span>sherzodbek@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="hx-contact-gd-wrap">
                                <div className="hx-contact-gd-icon">
                                    <i className="fi flaticon-placeholder"></i>
                                </div>
                                <div className="hx-contact-gd-text">
                                    <h4>Bizning joylashuvimiz</h4>
                                    <span>25 uy, Rudakiy ko'chasi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8812.711763988045!2d66.95834756433288!3d39.67009832747999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1655129755161!5m2!1sen!2s" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Contactpage;
