import RestaurantCard from "./RestaurantCard";
import resobj from "../Utils/Resobj";
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <button type="button">search</button>
            </div>
            <div className="rest-card">
                {
                    resobj.map((restaurant) =>(
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ) )
}
            </div>
               
        </div>
    )
};

export default Body;