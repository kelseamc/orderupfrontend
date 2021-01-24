import React from "react";

function MenuItem({item, onAddItem}){

    const {id, name, price, description} = item
    
    function handleAdd() {
        onAddItem(id)
    }
    
    return (
        <div className="item-tile"> 
            <h3>{name}</h3>
            <h5>${price}</h5>
            <p>{description}</p>
            <button onClick={handleAdd}>Add to Order</button>
         </div>
    )
}

export default MenuItem;