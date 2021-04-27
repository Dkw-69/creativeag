import React from 'react';
import Navbar from './Navbar';
import launch from '../images/launch.png'
import mobile from '../images/mobile.png'
import worktime from '../images/worktime.svg'
import Footer from './Footer';

const About = () => {
    return ( 
        <>
            <Navbar/>
            <h4 className="tabs-intro-header" >About Us</h4>
            <div id="about">
                <div className="about-left-col">
                    <img src={worktime} alt="worktime"/>
                </div>
                <div className="about-right-col">
                    <div className="about-text">
                        <h4 className="aboutp-sub-header">About Us</h4>
                        <span className="square"></span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sunt facere at exercitationem aspernatur qui. 
                            Non eligendi facilis eaque accusantium suscipit impedit eum, 
                            beatae alias consectetur veniam atque ex tempore dicta?
                        </p><br/>
                        <div className="line">
                            <span className="line-1"></span><br/>
                            <span className="line-2"></span><br/>
                            <span className="line-3"></span>
                        </div>
                        <h2>"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Non sunt quisquam molestiae explicabo sequi in."
                        </h2>
                        <h3>-----CE0</h3>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------ */}
            <div id="features">
                <div className="feature-row">
                    <div className="feature-col">
                        <img src={mobile} alt="mobile"/>
                        <h4>Keep Moving</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="feature-col">
                        <img src={launch} alt="launch"/>
                        <h4>Grow Fast</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="feature-col">
                        <img src={worktime} alt="worktime"/>
                        <h4>Global Reach</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default About;