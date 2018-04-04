import React from 'react'
import twitterSVG from "./twitter.svg";
import facebookSVG from "./facebook-f.svg";
import githubSVG from "./github.svg";

function Footer () {
    return (
        <div className="footer">
           <div className="socialLinks">
               <li className="social">
                   <img className="twitter" src={twitterSVG} alt="twitter"/>
               </li>
               <li className="social">
                   <img className="facebook" src={facebookSVG} alt="facebook"/>
               </li>
               <li className="social">
                   <img className="github" src={githubSVG} alt="github"/>
               </li>
           </div>
           <p className="copyright">
               Copyright &#169; Your Website 2018
            </p>
        </div>
    )
}

export default Footer;