import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../ModalVideo'
import blog1 from '../../images/blog/img-7.jpg'
import blog2 from '../../images/blog/img-8.jpg'
import blog3 from '../../images/blog/img-9.jpg'
import blog4 from '../../images/blog/img-10.jpg'
import aut from '../../images/blog/author.jpg'


const BlogList = () => {

    return(
        <section className="blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="blog-posts clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; Tomonidan <Link to="/blog-details">Uralov Baxtiyor</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">Sevimli mashinangiz uchun muhim maslahatlar</Link></h3>
                                    <p>Ko'plab yangi haydovchilar yangi avto uluv olgan vaqtda olingan avto ulov haqida malumotlarni bilgisi keladi sababi turli xil texnik buzulishlarni oldini olishdir.</p>
                                    <Link to="/blog-details" className="read-more">Ko'proq o'qing...</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog2} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; Tomonidan <Link to="/blog-details">Meliboyev Ixtiyor</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">Avtomobilning elektrik qismlariga masul xodim bo'lib elektrik bo'yicha yuqori tajriba soxibi.</Link></h3>
                                    <p></p>
                                    <Link to="/blog-details" className="read-more">Ko'proq o'qing...</Link>
                                </div>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog3} alt=""/>
                                    <div className="video-btn">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; Tomonidan <Link to="/blog-details">Nematov Nail</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">vtomobilning karburator, rediktor va ingektor qismlariga masul xodim bu xodimiz.</Link></h3>
                                    <p>Avtomobilni tamirlash bo'yicha 15 yildan ortiq tajribaga ega bu xodimimiz sizning xizmatingizga tayyor.</p>
                                    <Link to="/blog-details" className="read-more">Ko'proq o'qing..</Link>
                                </div>
                            </div>
                            <div className="post format-quote">
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; Tomonidan <Link to="/blog-details">Nazarov Olim</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">Avtomobilning xadavoy qismiga javob beruvchi mutaxasis.</Link></h3>
                                    <p>Bu mutaxasisimiz sizning avto ulovingizning tormiz, amertizator, rol va boshqa xadavoy sistemalariga masul xodim.</p>
                                    <Link to="/blog-details" className="read-more">Ko'proq o'qing..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog4} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={aut} alt=""/>
                                            &nbsp; By <Link to="/blog-details">Xushvaqtov Ilhom</Link>
                                        </li>
                                        <li>Octobor 12,2020</li>
                                    </ul>
                                    <h3><Link to="/blog-details">kompyuter diognostika</Link></h3>
                                    <p>Avtomobilni kompyuter orqali tekshiradi va qayerida qanaqa nuqsoni borligini aytadi. kompyuter orqali tuzaladigan joylarini tuzatadi.</p>
                                    <Link to="/blog-details" className="read-more">Ko'proq o'qing..</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-details" aria-label="Oldinga">
                                            <i className="ti-arrow-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-details">1</Link></li>
                                    <li><Link to="/blog-details">2</Link></li>
                                    <li><Link to="/blog-details">3</Link></li>
                                    <li>
                                        <Link to="/blog-details" aria-label="keyingi">
                                            <i className="ti-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
