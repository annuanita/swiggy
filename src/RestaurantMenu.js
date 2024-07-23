import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "./UseRestaurantMenu";

const RestaurantMenu = () => {
  const resId =useParams();
  //const [resInfo] = useRestaurantMenu(resId);
  const [resInfo, setResInfo] = useState(null);
  
  console.log(resId);

 useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await response.Json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  if (!resInfo) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  let itemCards = [];
  if (
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.categories?.[0]?.itemCards
  ) {
    itemCards =
      resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .categories[0].itemCards;
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines?.join(", ")} --------- {costForTwoMessage}
      </h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => (
            <li key={index}>{item.card.info.name}</li>
          ))
        ) : (
          <li>No menu items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
