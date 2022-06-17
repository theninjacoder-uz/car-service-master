import React, { Component } from "react";
import {Link} from 'react-router-dom'


class SimpleSlider2 extends Component {
    render() {

      return (
        <section className="hero hero-static-image-2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-7 slide-caption">
                        <div className="slide-title">
                            <h2>Eng yaxshi avtomobil ta'mirlash xizmatlari</h2>
                        </div>
                        <div className="slide-subtitle">
                            <p>Bizda faqat va faqat sifatli xizmat ko'rsatiladi chunki barcha xodimlarimiz eng zo'r xodimlardir.</p>
                        </div>
                        <div className="btns">
                            <Link to="/contact" className="theme-btn-s2">Biz bilan bog'lanish</Link>
                        </div>
                    </div>
                    <div className="hero-image -2"></div>
                </div>
            </div>
        </section>
      );
    }
  }

export default SimpleSlider2;