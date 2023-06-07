import React from "react";
import { render } from "@testing-library/react";
import "./Footer.css"

function Footer(){


    
    return(
        <>


        <div className="Footer">
            <div className="Container">

                <a className="logo" href="#"><img src="/wt.png" /></a>

                <ul className="links">
                    <li className="Calendar"><a href="#">Calendar</a></li>
                    <li className="Rank"><a href="#">Rank</a></li>
                    <li className="Create"><a href="#">Create</a></li>
                    <li className="About"><a href="#">About</a></li>
                </ul>
                <ul className="Contacts">
                    <li className="Twitter"><a className=" fa-brands fa-twitter" href="#"></a></li>
                    <li className="Discord"><a className=" fa-brands fa-discord" href="#"></a></li>
                    <li className="Email"><a className=" fa fa-envelope" href="#"></a></li>
                </ul>
            </div>

        </div>
        
        </>
    )
}


export default Footer