import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
const Heading = () => {
    const [btnNameReact , setBtnNameReact] = useState("login");
    return(
        <div className="Header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="btn-name" onClick={() =>{ btnNameReact==="login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}</button>
                </ul>
            </div>
          

        </div>
    );
}

export default Heading;