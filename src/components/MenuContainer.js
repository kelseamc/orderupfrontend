import React from "react";
import MenuItem from "./MenuItem"

function MenuContainer({menuItems, onAddItem}){
    
    const itemComponents = menuItems.map((item) => 
    <MenuItem 
    key={item.id} 
    item={item}
    onAddItem={onAddItem}
    />)
    return(
        <>
           {itemComponents}
        </>
    )
}
export default MenuContainer;
