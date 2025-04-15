import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Heading = () => {
    const [btnNameReact , setBtnNameReact] = useState("login");
    const online = useOnlineStatus();

    return(
        <div className="flex justify-between shadow-lg mb-2">
            <div className="logo-container">
            <img className="w-30" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {online ? "green" : "red"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="btn-name" onClick={() =>{ btnNameReact==="login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}</button>
                </ul>
            </div>
          

        </div>
    );
}

export default Heading;