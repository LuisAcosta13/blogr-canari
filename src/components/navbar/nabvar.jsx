import React from "react";
import Logo from '../../images/logo.svg'
import Arrow from '../../images/icon-arrow-light.svg'
import Menu from '../../images/icon-hamburger.svg'
import Close from '../../images/icon-close.svg'
import DarkArrow from '../../images/icon-arrow-dark.svg'
import './navbar.css'

const Navbar = () => {

    function toggleMenu(id) {
        const menu = document.getElementById(id)
        const otherMenus = document.querySelectorAll('.Select_List_mobile:not(#'+id+')')

        otherMenus.forEach(menu => {
          menu.classList.remove('display')

          const items = document.querySelectorAll('.Arrow:not(#arrow_' + id + ')')
          items.forEach(item => item.style.transform = 'rotate(0deg)')

        });

        menu.classList.toggle('display')
        
        let selectedArrowEffect = document.getElementById('arrow_' + id).style.transform 

        if(selectedArrowEffect !== 'rotate(180deg)'){
            document.getElementById('arrow_' + id).style.transform  = 'rotate(180deg)'
        } else {
            document.getElementById('arrow_' + id).style.transform  = 'rotate(0deg)'
        }
        
    }

    return(
        <div className="Navbar_Container">
            
            <div className="Navbar_Header">
                
                <div className="Navbar_Header_Menu">
                    <div className="Navbar_Menu_Icons">
                        <img className="Navbar_Header_Logo" src={Logo} alt='Blogr Logo'/>
                        
                        <ul className="Navbar_ul_mobile">
                             
                            <li>
                                <img className="Navbar_Menu_Icon_mobile" alt='Menu' src={Menu}/> 
                                <img className="Navbar_Close_Icon_mobile" alt='Menu' src={Close}/>
                            </li> 
                            
                            
                            <ul className="Navbar_Menu_mobile">
                                <li 
                                onClick={()=> toggleMenu('menu1')} 
                                className="Navbar_Item_Menu_mobile">
                                    
                                    Product <img id="arrow_menu1" className='Arrow' src={DarkArrow} alt="Arrow"/> 

                                    <div id='menu1' className="Select_List_mobile">
                                            <li>Overview</li><br/>
                                            <li>Pricing</li><br/>
                                            <li>Marketplace</li><br/>
                                            <li>Features</li><br/>
                                            <li>Integrations</li><br/>
                                    </div>
                                </li>
                                
                                <li 
                                onClick={()=> toggleMenu('menu2')} 
                                className="Navbar_Item_Menu_mobile">
                                    
                                    Company <img id="arrow_menu2" className='Arrow' src={DarkArrow} alt="Arrow"/> 

                                    <div id='menu2' className="Select_List_mobile">
                                            <li>About</li><br/>
                                            <li>Team</li><br/>
                                            <li>Blog</li><br/>
                                            <li>Careers</li><br/>
                                    </div>
                                </li>

                                <li 
                                onClick={()=> toggleMenu('menu3')} 
                                className="Navbar_Item_Menu_mobile">
                                    
                                    Connect <img id="arrow_menu3" className='Arrow' src={DarkArrow} alt="Arrow"/>

                                    <div id='menu3' className="Select_List_mobile">
                                        <li>Contact</li><br/>
                                        <li>Newsletter</li><br/>
                                        <li>LinkedIn</li><br/>
                                    </div>
                                </li>

                                <div className="Navbar_buttons_mobile">
                                    <div className="Login_mobile">Login</div>
                                    <div className="Singup_mobile">Sign Up</div> 
                                </div>
                            </ul>
                        </ul>
                    </div>
                    <div className="Navbar_Header_Select">

                        <ul className="Navbar_Select">

                            <li>
                                Product <img className='Arrow' src={Arrow} alt="Arrow"/>
                            </li> 

                            <ul className="Select_List">
                                <li>Overview</li><br/>
                                <li>Pricing</li><br/>
                                <li>Marketplace</li><br/>
                                <li>Features</li><br/>
                                <li>Integrations</li><br/>
                            </ul>
                        </ul>

                        <ul className="Navbar_Select">

                            <li>
                                Company <img className='Arrow' src={Arrow} alt="Arrow"/>
                            </li> 

                            <ul className="Select_List">
                                <li>About</li><br/>
                                <li>Team</li><br/>
                                <li>Blog</li><br/>
                                <li>Careers</li><br/>
                            </ul>
                        </ul>

                        <ul className="Navbar_Select">
                            
                            <li>
                                Connect <img className='Arrow' src={Arrow} alt="Arrow"/>
                            </li> 

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
                    <div className="Navbar_Button_Singup">Sing Up</div>
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