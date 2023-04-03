import React from "react";
import Logo from '../../images/logo.svg'
import './navbar.css'

const Navbar = () => {
    
    
    
    return(
        <div className="Navbar_Container">
            <div className="Navbar_Header">
                <img className="Navbar_Header_Logo" src={Logo} alt='Blogr Logo'/>
                <div className="Navbar_Header_Select">
                    <div disabled className="Navbar_Select" defaultValue='Product'>
                        Product
                    </div>
                    <div disabled className="Navbar_Select" defaultValue='Company'>
                        Company
                    </div>
                    <div className="Navbar_Select" defaultValue='Connect'>
                        Connect
                        <ul className="Select_List">
                            <li>Contact</li><br/>
                            <li>Newsletter</li><br/>
                            <li>LinkedIn</li><br/>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="Navbar_body">

            </div>
        </div>
    )
}

export default Navbar