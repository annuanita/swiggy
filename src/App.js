import React, { Suspense, lazy } from "react";
import Reactdom from "react-dom/client";
import HeaderComponent from "./Header";
import Body from "./Body";
import { createBrowserRouter ,RouterProvider, Outlet } from "react-router-dom";
import Error from "./Error";
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import REsMenu from "./REsMenu";
//import Grocery from "./Grocery";

const Grocery = lazy(() => import("./Grocery"));

//React element
const heading = (   
       <h1 className="head">hello react</h1>
);
   //React Component
const Applayout = ()=> {
    return(
<div>
    <HeaderComponent/>
    <Outlet/>
</div>
)};

const config = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
           path:"/",
           element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback ={<h1>Loading Data</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
        {
          path:"/rest",
          element:<REsMenu/>,
        }
      
    ],
    errorElement:<Error/>,
  },
 
]);

const root = Reactdom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={config}/>);