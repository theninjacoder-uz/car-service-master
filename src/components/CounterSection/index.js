import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'


const CounterSection = (props) => {

    return(
        <div className={`wpo-counter-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="wpo-counter-content">
                            <h2>Sizni qoniqtiradigan muhim narsalarimiz...</h2>
                            <p>Bizning barcha xodimlarimiz yuqori darajada malakali va uskunalarimiz eng so'ngi darajadagi uskunalardir. Bundan tashqari navbatlarni online bron qilish imkoni mavjudligi.</p>
                            <div className="btns">
                                <div className="btn-style btn-style-3"><Link to="/home">Biz haqimizda ko'proq ma'lumot oling...</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="wpo-counter-grids">
                            <div className="grid">
                                <div>
                                    <h2><span>4,012</span></h2>
                                </div>
                                <p>Yetkazib berilgan paketlar</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>605</span></h2>
                                </div>
                                <p>Qamrab olingan joylar</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>920</span></h2>
                                </div>
                                <p>Qoniqarli mijozlar</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>3,592</span></h2>
                                </div>
                                <p>Tonna tovarlar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default CounterSection;
