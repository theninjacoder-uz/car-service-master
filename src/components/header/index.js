import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import logo from '../../images/logo.png'
import bars from '../../images/menu.png'
import './style.css'

const Header = () => {

    const menuBtn = useRef()

    function openMenu() {
        menuBtn.current.classList.toggle('mobile-menu');
        console.log(11);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(500, 0);
    }

    return (

        <header>
            <div className="header-style-2">
                <div className="container">
                    <div className="row aling-items-center">
                        <div className="col-lg-3 col-md-10 col-sm-10 col-10 col-t ">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-2  d-lg-block p-relative col-m">
                            <div onClick={openMenu} className='menu-btn px-3 d-lg-none'><img style={{
                                width: '36px',
                                maxWidth: '30px',
                                position: 'relative',
                                right: '19px',
                            }} src={bars} alt="asdgfas" /></div>
                            <div ref={menuBtn} className="main-menu ">
                                <nav className="nav_mobile_menu">
                                    <ul>
                                        <li className="active"><Link onClick={ClickHandler} to="/home">Home</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/services">Service</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-details">Service single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/">Pages</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/Pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/">Blog</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-grid">Blog List</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-details">Blog single</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                        <li><Link to="/login">Logout</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-2 search">
                            <ul>
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-search"></i></Link>
                                    <ul>
                                        <li>
                                            <form onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="search here.." />
                                                <button type="btn"><i className="fa fa-search"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 col-2">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;
