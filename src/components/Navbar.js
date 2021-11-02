import React from "react";
import "./NavbarStyle.css";

function Navbar({}) {
    const ToggleSidebar = (e) => {
        e.target.parentNode.classList.toggle("open-navbar");
        let hamburger = document.getElementById("hamburger");
        hamburger.classList.toggle("squished");
        let navbarItems = document.querySelectorAll(".nav-content-item");
        if (hamburger.classList.contains("squished")) {
            for (let item of navbarItems) {
                item.setAttribute("tabIndex", "0");
            }
        } else {
            for (let item of navbarItems) {
                item.removeAttribute("tabIndex");
            }
        }
    };
    return (
        <div>
            <div className="navbar">
                <div
                    tabIndex="0"
                    className="navbar-toggle"
                    onKeyPress={ToggleSidebar}
                    onClick={ToggleSidebar}>
                    <div id="hamburger"></div>
                </div>
                <div className="navbar-header"><h2>Sideber Heading</h2></div>
                <div className="navbar-content">
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
