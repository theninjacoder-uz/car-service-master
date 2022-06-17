import React, { Component } from "react";
import {Link} from 'react-router-dom'

import './style.css'


class SimpleSlider extends Component {
    render() {

      return (
        <section className="hero hero-static-image">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-7 slide-caption">
                        <div className="slide-title">
                            <h2>Xavfsizligingizni Ta'minlaymiz<span>& Baxtli Sayohat</span></h2>
                        </div>
                        <div className="slide-subtitle">
                            <p>CAR-SERVICE-MASTER xodimlari avtomobilingiz uchun kerakli barcha texnik xizmatlarni amalga oshiradi.</p>
                        </div>
                        <div className="btns">
                            <Link to="/contact" className="theme-btn-s2">Biz bilan bog'lanish</Link>
                        </div>
                    </div>
                    <div className="hero-image"></div>
                </div>
            </div>
        </section>
      );
    }
  }

export default SimpleSlider;