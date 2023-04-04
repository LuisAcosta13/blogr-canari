import React from "react";
import './body.css'
import Image_One from '../../images/illustration-editor-desktop.svg'

const Body = () => {
    return(
        <div className="Body_container">
            <p className="Body_Main_Title">Designed for the future</p>
            <div className="Body_subcontainer_one">
                <div className="Body_ImageOne_container">
                    <img className='Body_Image_One' src={Image_One} alt='Desktop'/>
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
        </div>
    )
}

export default Body