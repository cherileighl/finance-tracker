import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-title">
                <h1>Finance Tracker</h1>
                <Typed
                    className="typed-text"
                    strings={["Track Spending", "Create Budgets", "Save Money"]}
                    typeSpeed={40}
                    backSpeed={60} 
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;
