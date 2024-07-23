import { Logo_URL } from "../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const HeaderComponent = () =>{
const [btnname ,setbtnname] =useState("login");
const online = useOnlineStatus();
    return(        
        <div className="header">
            <div className="logo">
            <img className="logo_img" 
            src={Logo_URL} 
            alt="img"/>
            </div>
            <ul className="nav-items">
                <li>Status: {online ?"✅" : "⛔" }</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button onClick={() => (
                     btnname === "login"? setbtnname("logout"):setbtnname("login")
                )}>{btnname}</button>
            </ul>                          
        </div>
    )};

    export default HeaderComponent;