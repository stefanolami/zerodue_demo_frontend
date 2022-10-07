import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";

const Header = (props) => {
    return (
        <header>
            <div className="logo-div">
                <Link to="/home" className="zeroDue">
                    <img className="logo" alt="Zerodue Logo" src={logo} />
                </Link>
            </div>
                {
                    props.context.authenticatedUser ? (
                        <div className="header-div">
                            <button className="header-btn button" onClick={props.context.actions.logOut}>Disconnetti</button>
                        </div>
                    ) : (
                        null
                    )
                }       
        </header>
    )
}

export default Header;