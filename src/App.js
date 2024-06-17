import React from "react";
import Reactdom from "react-dom/client";
import HeaderComponent from "./Header";
import Body from "./Body";

//Reactelement
const heading = (   
       <h1 className="head">hello react</h1>
);
   //React Component
const Applayout = ()=> {
    return(
<div>
    <HeaderComponent/>
    <Body/>
</div>
)};

const root = Reactdom.createRoot(document.getElementById("root"));

root.render(<Applayout/>);