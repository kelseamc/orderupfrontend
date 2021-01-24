import React from "react";
import OrderPreview from "../OrderPreview"
import Nav from "../Nav"
import MenuContainer from "../MenuContainer"

function Home({menuItems, onAddItem, addedItems}) {


    return (
        <div className="home">
            <div class="nav"><Nav /></div>
            <div class="order"><OrderPreview addedItems={addedItems}/></div>
            <div class="menu"><MenuContainer menuItems={menuItems} onAddItem={onAddItem}/></div>
        </div>
    )
}

export default Home;