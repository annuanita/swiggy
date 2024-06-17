const RestaurantCard =(props) =>{
    const { resData } =props;
    const{
     cloudinaryImageId,
     name,cuisines,avgRating,costForTwo,
     deliveryTime
    } =resData?.data;
     return(
          <div className="res-card">
             <img  className="res-logo" alt="img"
             src={
                 "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
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
export default RestaurantCard;