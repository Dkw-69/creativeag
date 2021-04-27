import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/creative-hero.png'
import launch from '../images/launch.png'
import mobile from '../images/mobile.png'
import worktime from '../images/worktime.svg'
import Footer from './Footer';

const Home = () => {
    return ( 
        <>
        <h4 className="hero-logo"><Link to="/">creative.</Link></h4>
            <div className="header">
                <div className="header-container">
                    <div className="hero-left-col">
                        <h1 className="hero-header-text">Discover a lot more <br/>clients</h1>
                        <span className="square"></span>
                        <p className="hero-para">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> 
                            Vel porro molestias amet ullam doloribus<br/> sunt accusantium? 
                        </p>
                        <button className="common-button">
                            <Link to="/contact">Learn More</Link>
                        </button>
                        <div className="line">
                            <span className="line-1"></span><br/>
                            <span className="line-2"></span><br/>
                            <span className="line-3"></span>
                        </div>
                    </div>
                    <div className="hero-right-col">
                        <img src={heroImage} alt="hero"/>
                    </div>
                </div>
            </div>
            <div>
                <ul id="slide-out" className="sidenav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div data-target="slide-out" className="sidenav-trigger" id="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="container section" id="photos">
                <div className="row">
                    <div className="col s12 l4">
                        <img src={launch} alt="" className="responsive-img materialboxed grid-img"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h3 className="section-headers">Launch</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
                            a? Incidunt ducimus qui, 
                            delectus fugiat earum aliquam quas mollitia recusandae exercitationem in veritatis pariatur perferendis, 
                            facere repellendus amet, nostrum ipsa?
                        </p>
                    </div>
                </div>
                <div className="row section-mid-section">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img src={mobile} alt="" className="responsive-img materialboxed grid-img"/>
                    </div>
                    <div className="col s12 l6 pull-l5 right-align offset-l1">
                        <h3 className="section-headers">Social</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
                            a? Incidunt ducimus qui, 
                            delectus fugiat earum aliquam quas mollitia recusandae exercitationem in veritatis pariatur perferendis, 
                            facere repellendus amet, nostrum ipsa?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4">
                        <img src={worktime} alt="" className="responsive-img materialboxed grid-img"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h3 className="section-headers">Access</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
                            a? Incidunt ducimus qui, 
                            delectus fugiat earum aliquam quas mollitia recusandae exercitationem in veritatis pariatur perferendis, 
                            facere repellendus amet, nostrum ipsa?
                        </p>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------------- */}
            <h4 className="tabs-intro-header" >Our Services</h4>
            <div className="tabs-section">
                <div className="container section">
                    <div className="row">
                        <div className="col s12 l4" id="left-tab">
                            <h4>What we do</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Vero excepturi dolor magni earum! Nesciunt ratione.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Vero excepturi dolor magni earum! Nesciunt ratione.
                            </p>
                        </div>
                        <div className="col s12 l6 offset-l2" id="right-tab">
                            <ul className="tabs">
                                <li className="tab col s6">
                                    <a href="#advertising">Advertising</a>
                                </li>
                                <li className="tab col s6">
                                    <a href="#marketing">Marketing</a>
                                </li>
                            </ul>
                            <div className="col s12" id="advertising">
                                <p className="flow-text">ADVERTISING</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Vero excepturi dolor magni earum! Nesciunt ratione.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Vero excepturi dolor magni earum! Nesciunt ratione.
                                </p>
                            </div>
                            <div className="col s12" id="marketing">
                                <p className="flow-text">MARKETING</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Vero excepturi dolor magni earum! Nesciunt ratione.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Vero excepturi dolor magni earum! Nesciunt ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------- */}
            <h4 className="tabs-intro-header" >Talk to Us</h4>
            <div className="container section" id="contact">
                <div className="row">
                    <div className="col s12 l5">
                        <h4>Get In Touch</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Vero excepturi dolor magni earum! Nesciunt ratione.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Vero excepturi dolor magni earum! Nesciunt ratione.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Vero excepturi dolor magni earum! Nesciunt ratione.
                        </p>
                    </div>
                    <div className="col s12 l5 offset-l2 form-col">
                        <form action="">
                            <div className="input-field">
                                <i className="material-icons prefix email">email</i>
                                <input type="email" id="email"/>
                                <label for="email">Your email</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix message">message</i>
                                <textarea className="materialize-textarea" id="message"></textarea>
                                <label for="message">Your message</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="date" className="datepicker"/> 
                                <label for="date">Choose a date to book  appointment</label>
                            </div>
                            <div className="input-field center">
                                <button className="btn-small">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* -------------------------------------------------- */}
            <Footer/>
        </>
     );
}
 
export default Home;