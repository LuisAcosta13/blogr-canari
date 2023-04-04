import React from "react";
import Logo from '../../images/logo.svg'
import './footer.css'

const Footer = () => {
    return(
        <div className="Footer">
            <div>
                <img className="Footer_Logo" src={Logo} alt='Blogr Logo'/>
            </div>
            <div className="Footer_Options">
                <div className="Footer_Title">Product</div>
                <div className="Footer_List">
                    <div className="Footer_Item">Overview</div>
                    <div className="Footer_Item">Pricing</div>
                    <div className="Footer_Item">Marketplace</div>
                    <div className="Footer_Item">Features</div>
                    <div className="Footer_Item">Integrations</div>
                </div>
            </div>
            <div className="Footer_Options">
                <div className="Footer_Title">Company</div>
                <div className="Footer_List">
                    <div className="Footer_Item">About</div>
                    <div className="Footer_Item">Team</div>
                    <div className="Footer_Item">Blog</div>
                    <div className="Footer_Item">Careers</div>
                </div>
            </div>
            <div className="Footer_Options">
                <div className="Footer_Title">Connect</div>
                <div className="Footer_List">
                    <div className="Footer_Item">Contact</div>
                    <div className="Footer_Item">Newsletter</div>
                    <div className="Footer_Item">LinkedIn</div>
                </div>
            </div>
        </div>
    )
}

export default Footer