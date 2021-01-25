import React from "react";
import OrderPreview from "../OrderPreview"
import Nav from "../Nav"
import MenuContainer from "../MenuContainer"

function Home({menuItems, onAddItem, addedItems, setCategory, category, total}) {
    

    return (
        <div className="home">
            <div className="nav"><Nav setCategory={setCategory} category={category}/></div>
            <div className="order"><OrderPreview addedItems={addedItems} total={total}/></div>
            <div>
            <h2>{category}</h2>
            </div>
            <div  className="menu"><MenuContainer menuItems={menuItems} onAddItem={onAddItem} /></div>
        </div>
    )
}

export default Home;