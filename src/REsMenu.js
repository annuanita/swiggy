import { useEffect, useState } from "react";
import RestaurantCategories from "./RestaurantCategories";
const REsMenu = () =>{
   const [resInfo, setResInfo] = useState(null); 
    useEffect(() =>{
        fetchData();
    },[]);
const fetchData =async () =>{
    const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId=804071&catalog_qa=undefined&submitAction=ENTER");
    const json = await response.json();
    //console.log(json.data);
    setResInfo(json.data);
}
if (!resInfo) {
    return <div style={styles.container}> Loading...</div>;
  }
  //console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[2].card.info.name)
//let itemCards = [];
const {name ,costForTwoMessage,cuisines,avgRating} = resInfo?.cards[2]?.card?.card?.info;
//itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//console.log(itemCards[0]);
const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
//const catagories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>{c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"});
const categories = Array.isArray(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ? resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];
console.log(categories);
return(
    <div style={styles.container}>
             <h1>{name}</h1>
             <h3>Price: {costForTwoMessage}</h3>
             <h3>Ratings: {avgRating}</h3>
             <h3>Cuisines: {cuisines && cuisines.length > 0 ? cuisines.join(", ") : "Not specified"}</h3>
             <h2>Menu</h2>
            {/** <ol>
                <li>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</li>
                <li>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name}</li>
                <li>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[2].card.info.name}</li>
                <li>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[3].card.info.name}</li>
                <li>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[4].card.info.name}</li>
                <li>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[5].card.info.name}</li>
             </ol>
             <ol> */}
            {/** <ol style={styles.menu}>
              {itemCards.map((item, id) => (
          <li key={id}>{item?.card?.info?.name}</li>
        ))}  
      </ol>*/}
              { categories.map((category) => (<RestaurantCategories key ={category?.card?.card?.title} data={category?.card?.card}/>))}
    </div>

    
)

}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      //minHeight: "10vh", // Ensures the container takes up the full viewport height
      padding: "2px",
      boxSizing: "border-box",
      textAlign: "center",
    },
    menu: {
      listStyleType: "none",
      padding: "10px",
      margin: "20px 0",
    },
  };
export default REsMenu;