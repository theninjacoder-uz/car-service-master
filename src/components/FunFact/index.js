import React from 'react';

import './style.css'

const FunFact = (props) => {

    return(
        <section className="fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="fun-fact-content">
                            <h2>Mana sizning yutug'ingiz. Keling, buni tekshirib ko'ramiz</h2>
                            <p>Birinchi navbatda siz avto ulovingiz uchun mukammal darajada texnik xizmat ko'rsatadigan xodimlarni tez topish imkoni mavjudligi. Avtomobilingiz uchun kerakli ehtiyot qismlarni bozordan izlamasdan shu yerda topish imkoni mavjudligi. </p>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="fun-fact-grids clearfix">
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="300+">150</span>+</h3>
                                </div>
                                <p>Mutaxassis Texniklar</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="1026">1026</span></h3>
                                </div>
                                <p>Qoniqarli Mijoz</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="25+">15</span>+</h3>
                                </div>
                                <p>Yillik Tajriba</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><span className="odometer" data-count="3215">3215</span></h3>
                                </div>
                                <p>Loyihani Yakunlash</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default FunFact;
