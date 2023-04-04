import React from "react";
import Logo from '../../images/logo.svg'
import './navbar.css'

const Navbar = () => {
    
    return(
        <div className="Navbar_Container">
            
            <div className="Navbar_Header">
                
                <div className="Navbar_Header_Menu">
                    <img className="Navbar_Header_Logo" src={Logo} alt='Blogr Logo'/>
                    
                    <div className="Navbar_Header_Select">

                        <ul className="Navbar_Select">
                            <li>Product</li>
                            <ul className="Select_List">
                                    <li>Overview</li><br/>
                                    <li>Pricing</li><br/>
                                    <li>Marketplace</li><br/>
                                    <li>Features</li><br/>
                                    <li>Integrations</li><br/>
                                </ul>
                        </ul>

                        <ul className="Navbar_Select">
                            <li>Company</li>
                            <ul className="Select_List">
                                    <li>About</li><br/>
                                    <li>Team</li><br/>
                                    <li>Blog</li><br/>
                                    <li>Careers</li><br/>
                                </ul>
                        </ul>

                        <ul className="Navbar_Select">
                            <li>Connect</li>
                            <ul className="Select_List">
                                <li>Contact</li><br/>
                                <li>Newsletter</li><br/>
                                <li>LinkedIn</li><br/>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className="Navbar_Buttons">
                    <div className="Navbar_Button">Login</div>
                    <div className="Navbar_Button">Sing Up</div>
                </div>
            </div>
            <div className="Navbar_body">
                <b className="Navbar_body_title">A modern publishing platform</b>
                <b className="Navbar_body_subtitle">Grow your audience and build your online brand</b>
                <div className="Navbar_body_buttons">
                    <div className="Body_Button_One">Start for Free</div>
                    <div className="Body_Button_Two">Learn More</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar