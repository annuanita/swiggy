import RestaurantCard,{isOpened} from "./RestaurantCard";
import { useState,useEffect } from "react";
//import mockdata from "../Utils/mockdata.js";
import resobj from "../Utils/Resobj.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.js";

const Body = () =>{
    const [listRestaurant,setListRestaurant] = useState([]);

    const [searchText ,setSeaarchText] =useState("");
    const [fileteredRestaurant , setFilteredRestaurant] =useState([]);
    const Restaurantopen = isOpened(RestaurantCard);
  
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData =async () =>{
        const response =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6542&lng=77.2373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        console.log(json);
        //setListRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
const statusbar = useOnlineStatus();
        if(statusbar === false){
            return(
            <h1>OOps looks like you are offline check your internet connection</h1>
        )}
    return(
        <div className="body">
            
            <div className="search">
            <div>
                <input type="text" className="searc-box" value ={searchText} onChange={(e)=>{
                        setSeaarchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    console.log(searchText);
                    const filteredrestaurant = listRestaurant.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                       );
                       setFilteredRestaurant(filteredrestaurant);
                }}> Search</button>
            </div>
                <button className="filter-btn"
                onClick={() =>{
                    const filterobj =listRestaurant.filter((res) =>res.info.avgRating >= 4);
                      
                    setFilteredRestaurant(filterobj);
                    console.log(filterobj);
                }}>
                    Top rated Restaurant</button>
            </div>
            <div className="rest-card">
                {
                    fileteredRestaurant.map((restaurant) =>(
                       <Link key ={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> 
                        {restaurant.info.promoted ? (<Restaurantopen resData={restaurant}/>): 
                        (<RestaurantCard resData={restaurant}/>)}</Link>
                       
                    ) )
}
            </div>
               
        </div>
    )
};

export default Body;