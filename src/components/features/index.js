import React from 'react';

import './style.css'

const Features = (props) => {

    return(
        <div className="features-style">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="features-wrap">
                            <div className="features-icon">
                                <i className="fi flaticon-turbo"></i>
                            </div>
                            <div className="features-text">
                                <h2>Dvigatel ta'mirlash</h2>
                                <p>Profilaktik ta'mirlash qimmat ta'mirlashga bo'lgan ehtiyojni kamaytirishga yordam beradi. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="features-wrap">
                            <div className="features-icon-2">
                                <i className="fi flaticon-tyre"></i>
                            </div>
                            <div className="features-text">
                                <h2>Shinalarni almashtirish</h2>
                                <p>Qachonki g'ildirak shikastlanganda va u sezilarli bo'ladi. Shinani shikastlash juda oson: yon devorni kesib oling, armatura bilan to'qnashing yoki churra chiqadigan joyda urib qo'ying</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6">
                        <div className="features-wrap">
                            <div className="features-icon-3">
                                <i className="fi flaticon-car-1"></i>
                            </div>
                            <div className="features-text">
                                <h2>Karobkani Tamirlash</h2>
                                <p>Dvigatelning aylanish tezligi yoki “daqiqada aylanishlar” mos ravishda past bo'lishi uchun transmissiya avtomobil tezligiga va tezlatkich kiritishiga (ya'ni, avtomobilingiz pedalini qanchalik pastga bosishingizga) qarab viteslarni o'zgartiradi. e</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default Features;
