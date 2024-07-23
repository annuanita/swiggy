
const RestaurantCard =(props) =>{
    const { resData } =props;
    const{
     cloudinaryImageId,
     name,cuisines,avgRating,costForTwo,
     deliveryTime
    } =resData?.info;
     return(
          <div className="res-card">
             <img  className="res-logo" alt="img"
             src={
                 "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  cloudinaryImageId    
             }/>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}Stars</h4>
                <h5>Rs{costForTwo/100}for two</h5>
                <h5>{deliveryTime}minutes</h5>
          </div>
     )
 };

 export const isOpened = (RestaurantCard) =>{
    return(props) =>{
        return(
            <div>
                <label>Opened</label>
                <RestaurantCard  {...props}/>
            </div>
        )
    }
 };
export default RestaurantCard;