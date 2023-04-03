import React from "react";

const Navbar = () => {
    
    const conectOptions = ['Contact', 'Newsletter', 'Linkedin']
    
    return(
        <div className="Navbar_container">
            <div className="Navbar_header">
                <span></span>
                <div>
                    <select className="Navbar_Select_Product">
                        <option>

                        </option>
                    </select>
                    <select className="Navbar_Select_Company">
                        
                    </select>
                    <select className="Navbar_Select_Connect">
                    {conectOptions.map(option => <option className={`Option_${option}`}>{option}</option>)}
                    </select>
                </div>
            </div>
            <div className="Navbar_body">

            </div>
        </div>
    )
}

export default Navbar