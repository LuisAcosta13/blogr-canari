import React from "react";
import './body.css'
import Desktop_Img from '../../images/illustration-editor-desktop.svg'
import Desktop_Mobile from '../../images/illustration-editor-mobile.svg'
import Phones_img from '../../images/illustration-phones.svg'
import Laptop_Desktop from '../../images/illustration-laptop-desktop.svg'
import Laptop_Mobile from '../../images/illustration-laptop-mobile.svg'

const Body = () => {
    return(
        <div className="Body">
            <p className="Body_Main_Title">Designed for the future</p>
            <div className="Body_one">
                <div className="Body_ImageOne_container">
                    <img className='Body_Image_One' src={Desktop_Img} alt='Desktop'/>
                    <img className='Body_Image_One_mobile' src={Desktop_Mobile} alt='Desktop'/>
                </div>    
                <div className="Text_Container">
                    <div className="Body_Section_One">
                        <p className="Body_Title">Introducing an extensible editor</p>
                        <p className="Body_Text">
                            Blogr features an exceedingly intuitive interface 
                            which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and 
                            allows easy manipulation of embeds such as images, 
                            videos, and Markdown.
                            Extensibility with plugins and themes provide wasy ways 
                            to add functionality or change the looks of a blog.
                        </p>
                    </div>
                    <div className="Body_Section_Two">
                        <p className="Body_Title">Robust content management</p>
                        <p className="Body_Text">
                            Flexible content management enables users to easily move 
                            through posts. Increase the usability of your blog by 
                            adding customized categories, sections, format, or follow. 
                            With this functionality, you're in full control.
                        </p>
                    </div>
                </div>
            </div>

            <div className="Body_two">
                <div className="Body_two_subcontainer">
                    <div className="Body_two_Images">
                        <img className="Phones_img" src={Phones_img} alt='Two Phones'/>
                       
                    </div>
                    <div className='Body_two_Section'>
                        <p className="Body_two_Title">
                            State of the Art Infrastructure
                        </p>
                        <p className="Body_two_Text">
                            With reliability and speed in mind, worldwide data 
                            centers provide the backbone for ultra-fast connectivity.
                            This ensures your site will load instantly, no matter where 
                            your readers are, keeping your site competitive.
                        </p>
                    </div>
                </div>
            </div>
            <div className="Body_Three">
                <div className="Body_ImageThree_container">
                    <img className='Body_Image_Three' src={Laptop_Desktop} alt='Laptop'/>
                    <img className='Body_Image_Three_mobile' src={Laptop_Mobile} alt='Laptop'/>
                </div>
                <div>
                <div className="Body_Section_One">
                        <p className="Body_Title">Free, open, simple</p>
                        <p className="Body_Text">
                            Blogr is a free and open source application backed by a largue 
                            community of helpful developers. It supports features such as code 
                            syntax highlighting. RSS feeds, social media integration, third-party 
                            commenting tools, and work seamlessly with Google Analytics. The 
                            architecture is clean and is relatively easy to learn.
                        </p>
                    </div>
                    <div className="Body_Section_Two">
                        <p className="Body_Title">Powerful tooling</p>
                        <p className="Body_Text">
                            Batteries included. We built a simple and straightforward CLI tool that 
                            makes customization and deployement a breeze, but capable of producing 
                            even the most complicated sites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body