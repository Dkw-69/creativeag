import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
    return ( 
        <>
            <Navbar/>
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
            <Footer/>
        </>
     );
}
 
export default Contact;