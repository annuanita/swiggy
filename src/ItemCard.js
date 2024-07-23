const ItemCard = ({item}) =>{
    return(
       <div className="item-card-container">
        {
            item.map((items) =>(
             <div  key={items.card.info.id} className="item-card">      
                <div>
                    <span>Name: {items.card.info.name}</span>
                    <span>Price: {items.card.info.defaultPrice/100}</span>
                    <p>{items.card.info.description}</p>
                    </div> 
                    
                     </div>
            ))
        }
       </div>
    )
}

export default ItemCard;