import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/">Creative.</Link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons right-bars">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/about">About</Link> 
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> 
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;