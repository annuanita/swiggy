import { Logo_URL } from "../Utils/Constants";
const HeaderComponent = () =>{
    return(        
        <div className="header">
            <div className="logo">
            <img className="logo_img" 
            src={Logo_URL} 
            alt="img"/>
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>                          
        </div>
    )};

    export default HeaderComponent;