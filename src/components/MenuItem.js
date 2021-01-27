import React from "react";

function MenuItem({item, onAddItem}){

    const {id, name, price, description} = item
    
    function handleAdd() {
        onAddItem(id)
    }
    
    return (
        <div className="item-tile"> 
            <div className="item-tile-name">
                <h3>{name}</h3>
            </div>
            <div className="item-tile-price">
            <h5>${price}</h5>
            </div>
            <div className="item-tile-description">
                <p>{description}</p>
            </div>
            <button onClick={handleAdd}>Add to Order</button>
         </div>
    )
}

export default MenuItem;