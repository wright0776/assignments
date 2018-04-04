import React from "react";
import NavBar from "./NavBar";

function Header () {
    return (
        <div className="headerContainer">
            <NavBar />
            <div className="header">
                <div className="headerOverlay">
                    <h1>Clean Blog</h1>
                    <span>A Blog Theme by Start Bootstrap</span>
                </div>
            </div>
        </div>
    )
}

export default Header;