import React from 'react';
import {Link} from 'react-router-dom'
import ins1 from '../../images/recent-posts/img-1.jpg'
import ins2 from '../../images/recent-posts/img-2.jpg'
import ins3 from '../../images/recent-posts/img-3.jpg'


import './style.css'

const BlogSidebar = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-md-8 col-sm-12 col-12">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Qidirmoq</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Qidirmoq"/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/blog-details">Dvigatel ta'mirlash</Link></li>
                        <li><Link to="/blog-details">Shinalarni almashtirish</Link></li>
                        <li><Link to="/blog-details">Avto Moyka</Link></li>
                        <li><Link to="/blog-details">Diagnostika</Link></li>
                        <li><Link to="/blog-details">Batareyalarni almashtirish</Link></li>
                        <li><Link to="/blog-details">Singan joylarni almashtirish</Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>oxirgi post</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">CAR-SERVICE-MASTER tamirlash ustaxonasi zo'r ekan.</Link></h4>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">BU ustahona hodimlari juda sifatli tamirlar ekan rastdan.</Link></h4>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">CAR-SERVICE-MASTER tamirlash ustaxonasi zo'r.</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Katagoriyalar</h3>
                    <ul>
                        <li><Link to="/blog-details">Ta'mirlash</Link></li>
                        <li><Link to="/blog-details">Shinalar</Link></li>
                        <li><Link to="/blog-details">Mashina</Link></li>
                        <li><Link to="/blog-details">O'zgartirish</Link></li>
                        <li><Link to="/blog-details">Onlayn</Link></li>
                        <li><Link to="/blog-details">Tozalash</Link></li>
                        <li><Link to="/blog-details">Batareya</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
