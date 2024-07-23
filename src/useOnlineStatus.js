import { useEffect, useState } from "react";

const useOnlineStatus =  () =>{
const [statusbar ,setStatusBar] = useState(true);
    //check if online
    // boolean check 
    //return status
    useEffect(() =>{
        window.addEventListener("offline", () =>{
            setStatusBar(false);
        });
        window.addEventListener("online", () =>{
            setStatusBar(true);
        })

    },[]);

    return statusbar;
}

export default useOnlineStatus;