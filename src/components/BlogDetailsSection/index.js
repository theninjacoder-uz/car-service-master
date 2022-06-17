import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import blog1 from '../../images/blog/img-7.jpg'
import blog2 from '../../images/blog/author.jpg'
import blog3 from '../../images/blog-details/author.jpg'
import blog5 from '../../images/blog-details/comments-author/img-1.jpg'
import blog6 from '../../images/blog-details/comments-author/img-2.jpg'
import blog7 from '../../images/blog-details/comments-author/img-3.jpg'
import './style.css'

const BlogDetailsSection = () => {

    const SubmitHandler = (e) => {
      e.preventDefault()
    }

    return(
        <section className="blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li>
                                        <img src={blog2} alt=""/>
                                        &nbsp; Tomonidan <Link to="/blog-details">Uralov Baxtiyor</Link>
                                    </li>
                                    <li>September 10,2000</li>
                                </ul>
                                <h2>Sevimli mashinangiz uchun muhim maslahatlar</h2>
                                <p>CAR-SERVICE-MASTER avto tamirlash ustahonasida ishlovchi Uralov Baxtiyor avtomobilning motor yani dvigatel qismi bo'yicha mutaxasis bo'lib dvigatel bo'yicha qiziqqan barcha sovollaringizni berishingiz mumkin. </p>
                                <p>CAR-SERVICE-MASTER avto tamirlash ustahonasida ishlovchi xodimlar eng kamida 15 yillik tajribaga ega.</p>
                                <blockquote>CAR-SERVICE-MASTER hodimlari avto tamirlash musabaqalarida yuqori savrunlarni qo'lga kiritgan</blockquote>
                                <p>CAR-SERVICE-MASTER tamirlash ustaxonasi sizga imkon qadar xizmat qiladi agar sizning afto ulovingiz yo'lda tamirga muhtoj bo'lib qolsa birgina telefon orqali bizga murojoat qilsangiz biz borib avtomobilni tuzatib beramiz. </p>
                                <p>Bizda navbatlarni online bilish mumkin yani mashinani remont qilish uchun o'zingiz bizning oldimizda turushungiz shart emas mashina tuzatib bo'lingandan keyin biz o'zimiz siz bilan bog'lanamiz.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/blog-details">Biznes</Link></li>
                                        <li><Link to="/blog-details">Yangi brend</Link></li>
                                        <li><Link to="/blog-details">Avtomobil</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="/blog-details"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/blog-details" target="_blank"> <img src={blog3} alt=""/></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/blog-details" className="author-name">Meliboyev Ixtiyor</Link>
                                    <p>Avtomobilning elektrik qismlariga masul xodim bo'lib elektrik bo'yicha yuqori tajriba soxibi.</p>
                                    <div className="socials">
                                        <ul className="social-link">
                                            <li><Link to="/blog-details"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/blog-details"><i className="ti-linkedin"></i></Link></li>
                                            <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            <div className="more-posts clearfix">
                                <div className="previous-post">
                                    <Link to="/blog-details">
                                        <span className="post-control-link">Oldingi</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="/blog-details">
                                        <span className="post-control-link">Keyingi sahifa</span>
                                    </Link>
                                </div>
                            </div> 
                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">izohlar</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"> <img src={blog5} alt=""/> </div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>Nematov Nail <span className="comments-date">December 20 1990 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>avtomobilning karburator, rediktor va ingektor qismlariga masul xodim bu xodimiz.</p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-details"><span>Javob berish</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"> <img src={blog6} alt=""/> </div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Nazarov Olim<span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>Avtomobilning xadavoy qismiga javob beruvchi mutaxasis.  </p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" to="/blog-details"><span>Javob bering</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"> <img src={blog7} alt=""/> </div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>Xushvaqtov Ilhom <span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>Avtomobilni kompyuter orqali tekshiradi va qayerida qanaqa nuqsoni borligini aytadi. </p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" to="/blog-details"><span>Javob bering</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"> <img src={blog5} alt=""/> </div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>Raximov Sardor<span className="comments-date">Octobor 28,2020 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Avtomobilni texnik ko'rikdan o'tkazadi. qayerida qanaqa nuqson mavjud bo'lsa shu ustaga yo'llanma beradi. </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-details"><span>Javob bering</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div> 
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Fikr qoldirish</h3>
                                    <form onSubmit={SubmitHandler} id="commentform" className="comment-form">
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Fikrlaringizni yozib qoldiring..."></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <input placeholder="Veb-sayt" type="url"/>
                                            <input placeholder="Ism" type="text"/>
                                            <input placeholder="Email" type="email"/>
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Fikr qoldirish" type="submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div> 
        </section>
     )
        
}

export default BlogDetailsSection;
