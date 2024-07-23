import { useState } from "react";


const User = (props) =>{
  const count = useState(0);
  const count2 = useState(1);

   const {clas,newt} = props;
    return(
        <div className="user-card">
             <h2>Name: Anita Maurya</h2>
             <h3>Location: Delhi</h3>
             <h3>Hobby: Xyz</h3>
             <h4>{clas}</h4>
             <h4>{newt}</h4>
             <h2>Count: {count}</h2>
             <h2>Count2: {count2}</h2>
        </div>
    )
};

export default User;