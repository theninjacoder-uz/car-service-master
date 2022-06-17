import React from 'react';
import pr1 from '../../images/404.png'
import {Link} from 'react-router-dom'
import './style.css'

const Error = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(500, 0);
     }
  return (
    <section className="error-404-section section-padding">
        <div className="container">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="content clearfix">
                        <div className="error">
                            <img src={pr1} alt=""/>
                        </div>
                        <div className="error-message">
                            <h3>Sahifa topilmadi!</h3>
                            <p>Kechirasiz, lekin siz so'ragan sahifani topa olmadik. Buning sababi veb-manzilni noto'g'ri kiritganingiz bo'lishi mumkin.</p>
                            <Link onClick={ClickHandler} to="/home" className="theme-btn-s2">Bosh sahifaga qaytish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}

export default Error;