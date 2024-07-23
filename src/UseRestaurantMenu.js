import { useEffect, useState } from "react";

const useRestaurantMenu =(resId) =>{
    const [resInfo, setResInfo] = useState(null);
    
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await response.json();
        console.log(json);
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }

  return resInfo;


}


export default useRestaurantMenu;