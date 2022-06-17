import React from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css'

const Services = (props) => {

    const navigate = useNavigate();
    const handleService = () =>{
        navigate("/table");
    }

    return(
        <div className="service-style-1 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-s2 text-center">
                        <span>Nima qilamiz</span>
                        <h2>Bizning xizmatlar</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6" onClick={handleService}>
                        <div className="service-wrap">
                            <div className="service-icon">
                                <i className="fi flaticon-turbo"></i>
                            </div>
                            <div className="service-text" >
                                <h2>Dvigatel ta'mirlash</h2>
                                <p>Avtomobilni divigatel qismiga kerakli texnik yordamni ko'rsatamiz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6" onClick={handleService}>
                        <div className="service-wrap">
                            <div className="service-icon-2">
                                <i className="fi flaticon-tyre"></i>
                            </div>
                            <div className="service-text">
                                <h2>Shinalarni Almashtirish</h2>
                                <p>Avtomobil shinalarini almashtiramiz va yamash xizmatlarini amalga oshiramiz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6" onClick={handleService}>
                        <div className="service-wrap">
                            <div className="service-icon-3">
                                <i className="fi flaticon-car-1"></i>
                            </div>
                            <div className="service-text">
                                <h2>Transmission</h2>
                                <p>Avtomobil uzatmalar qutisini tamirlaymiz va almashtiramiz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6" onClick={handleService}>
                        <div className="service-wrap">
                            <div className="service-icon-4">
                                <i className="fi flaticon-car-repair"></i>
                            </div>
                            <div className="service-text">
                                <h2>Kompyuter Diognostika</h2>
                                <p>Kompyuter orqali avtomobilingizni nazorat qilib qayerida defekt borligini sizga malum qiladi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6" onClick={handleService}>
                        <div className="service-wrap">
                            <div className="service-icon-5">
                                <i className="fi flaticon-battery"></i>
                            </div>
                            <div className="service-text">
                                <h2>Bateriya</h2>
                                <p>Bazida shunday holatlar bo'ladiki avtomobil batareyasi yoriladi uni yamash va tamirlash mumkin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6" onClick={handleService}>
                        <div className="service-wrap">
                            <div className="service-icon-6">
                                <i className="fi flaticon-electricity"></i>
                            </div>
                            <div className="service-text">
                                <h2>Singanlarni Almashtirish</h2>
                                <p>Avtomobilning yardamchi va asosiy extiyot qismlarini almashtirish.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Services;
