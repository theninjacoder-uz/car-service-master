import React from 'react';
import abimg2 from '../../images/about/about.jpg'
import {Link} from 'react-router-dom'
import './style.css'

const AboutSection2 = () => {
    
    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }
    return(
        <section className="about-section-2">
            <div className="content-area">
                <div className="left-content">
                    <img src={abimg2} alt=""/>
                </div>
                <div className="right-content">
                    <div className="about-content">
                        <div className="section-title">
                            <span>Kompaniyamiz haqida</span>
                            <h2>Biz sizga qanday yordam bera olamiz</h2>
                        </div>
                        <div className="details">
                            <p>CAR-SERVICE-MASTER Avto tamirlash ustaxonasi xodimlari sizlarning aftomobillaringiz haqida qayg'uradi. Mashinalaringizga mukkammal darajada texnik xizmat ko'rsatadi.</p>
                            <p>CAR-SERVICE-MASTER avto tamirlash ustaxonasi sizning mashinalaringizga kerakli barcha texnik xizmatlarni omalga oshiradi </p>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn-s3">Batafsil ma'lumot</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default AboutSection2;
