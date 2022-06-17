import React from 'react';
import abimg2 from '../../images/about/about-pic-2.png'
import {Link} from 'react-router-dom'
import './style.css'

const AboutSection3 = () => {

    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }

    return(
        <section className="about-section-3">
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
                            <p>Bizning xodimlarning barchasi 15 yillik tajribaga ega.</p>
                            <p>Bizda barcha uskunalar zamon talabiga to'liq mos keladi</p>
                            <p>Bizning xodimlar afto tamirlash musabaqalarida yuqori o'rinlarni qo'lga kiritgan</p>

                            <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Batafsil ma'lumot</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default AboutSection3;
