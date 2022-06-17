import React from 'react';

import im1 from '../../images/service-details/img-3.jpg'
import im2 from '../../images/service-details/img-1.jpg'
import {Link} from 'react-router-dom'
import './style.css'

const ServicesSingle = (props) => {

    return(
        <div className="hx-service-dt-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="hx-service-dt-left">
                            <div className="widget category-widget">
                                <h3>Bo'limlar</h3>
                                <ul>
                                    <li><Link to="/service-details">Dvigatel Ta'mirlash</Link></li>
                                    <li><Link to="/service-details">Shinalarni Almashtirish</Link></li>
                                    <li><Link to="/service-details">Transmission</Link></li>
                                    <li><Link to="/service-details">Kompyuter Diagnostika</Link></li>
                                    <li><Link to="/service-details">Batareya Almashtirish</Link></li>
                                    <li><Link to="/service-details">Singanlarni Almashtirish</Link></li>
                                </ul>
                            </div>
                            <div className="hx-field-section">
                                <div className="hx-field-img">
                                    <img src={im1} alt=""/>
                                </div>
                                <div className="hx-field-content">
                                    <h3>Ol<span>25%</span>O'chir</h3>
                                    <h2>Hamma Buyurtma</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="hx-service-dt-right">
                            <div className="hx-service-dt-img">
                                 <img src={im2} alt=""/>
                            </div>
                            <h3>Nima uchun to'g'ri dvigatel moyi muhim?</h3>
                            <p>Avtomobilga texnik xizmat ko'rsatishni eslatuvchi tizimlar, ayniqsa transport vositalarining ish sharoitlarini kuzatuvchi tizimlar haqida bilish kerak bo'lgan muhim narsa shundaki, ularning aniqligi avtomobil ishlab chiqaruvchisining texnik xususiyatlariga mos keladigan dvigatel moyidan foydalanishga bog'liq. Agar siz kamroq mahsulotdan foydalansangiz - masalan, to'liq sintetik moyni talab qiladigan dvigatelda an'anaviy moy - bilishning hech qanday usuli yo'q.</p>
                            <p>Shunday qilib, moy parchalanishi mumkin, natijada vosita tez surtiladi yoki eslatma tizimi xizmat ogohlantirishini ko'rsatishdan oldin ishlamay qoladi. Biroq, ko'pgina avtomobil ishlab chiqaruvchilari eslatma tizimi mavjud bo'lgan moyni har 12 oyda o'zgartirishni aytishadi</p>
                            <h3>Biz Qanday Ishlaymiz</h3>
                            <p>Avtomobilga texnik xizmat ko'rsatishni eslatuvchi tizimlar haqida bilish kerak bo'lgan muhim narsa, ayniqsa transport vositalarining ishlash sharoitlarini kuzatuvchi tizimlar, ularning aniqligi bog'liqdir.</p>
                            <div className="service-style-1 service-details-what-we-do">
                                <div className="row no-gutters">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-wrap">
                                            <div className="service-icon">
                                                <i className="fi flaticon-turbo"></i>
                                            </div>
                                            <div className="service-text">
                                                <h2>Xizmatingizni Tanlang</h2>
                                                <p>Ustaxonamizdan sizga qaysi yo'nalish bo'yicha yardam kerakliligini tanlashingiz mumkin.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4  col-sm-6">
                                        <div className="service-wrap">
                                            <div className="service-icon-2">
                                                <i className="fi flaticon-tyre"></i>
                                            </div>
                                            <div className="service-text">
                                                <h2>Uchrashuvga yoziling</h2>
                                                <p>Avtomobilingizni tamirlash uchun usta ko'rigiga online yozilish va vaqtingizni tejash imkoni mavjud.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4  col-sm-6">
                                        <div className="service-wrap">
                                            <div className="service-icon-3">
                                                <i className="fi flaticon-car-1"></i>
                                            </div>
                                            <div className="service-text">
                                                <h2>So'rovingizni tasdiqlang</h2>
                                                <p>Oline navbatga yozilganligingizni shirix kod orqali tasdiqlash kerak bo'ladi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prv-nx">
                            <div className="pre-btn"><Link to="/service-details">Oldingi</Link></div>
                            <div className="nex-btn"><Link to="/service-details">Keyingi</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default ServicesSingle;
