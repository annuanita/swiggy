import User from "./User";
import UserClass from "./UserClass";
import React from "react";
 class About extends React.Component{
    constructor(props){
        super(props);
        
           // console.log("parent Constructor");
        
    }

    componentDidMount(){
       // console.log("parent ComponentDidMount()");
    }
    render(){
      //  console.log("parent render");
    return(
        <div>
            <h1>About Us page</h1>
            <h2> for routing example</h2>

          {/** <User  clas={"second props for function"} newt ={"props for function"}/> */}
            <UserClass pp ={"passing props for class"} xyz={"passing multiple props in class"}/>
        </div>
         )
        }
}


export default About;