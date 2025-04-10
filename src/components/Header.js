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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btn-name" onClick={() =>{ btnNameReact==="login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}</button>
                </ul>
            </div>
          

        </div>
    );
}

export default Heading;