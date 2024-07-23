import { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategories = ({data}) =>{
    const [showItem, setShowItem] = useState(false);

    const handleClick = () => {
        setShowItem(!showItem);
    };
    return(
<div className="accordion-container">
    <div className="accordion">
        <div className="accordion-header" onClick={handleClick}>
    <span>{data.title} ({(data.itemCards.length)})</span>
    <span>⬇️</span>
    {showItem && <ItemCard item={data.itemCards} />}
     </div>                   
</div>
</div>
    );
};

export default RestaurantCategories;