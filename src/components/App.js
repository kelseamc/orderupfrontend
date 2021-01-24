import React, {useState, useEffect} from "react";
import Header from "./Header"
import { Redirect, Route, Switch } from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderContainer from "./pages/OrderContainer"
import Home from "./pages/Home"


function App() {
    const [menuItems, setMenuItems] = useState([])
    const [addedItems, setAddedItems] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:3001/api/v1/menu_items")
        .then(r => r.json())
        .then((itemArray) => {
            setMenuItems(itemArray)
        })
    }, [Home])

    function handleAddItem(itemId) {
        const newItem = menuItems.find((item) => item.id == itemId)
        // newItem {...newItem, quantity: 1}
        setAddedItems([...addedItems, newItem])
    }

    console.log(addedItems)
    return(
        <div className="app">
        <div className="header"><Header /></div>
        <div className="body">
        <Switch>
            <Route exact path="/" >
                <Home menuItems={menuItems} onAddItem={handleAddItem} addedItems={addedItems}/>
            </Route>
            <Route exact path="/orders/new" >
                <OrderContainer addedItems={addedItems}/>
            </Route>
            <Route exact path="/orders/:id" >
                <OrderConfirmation />
            </Route>
           
        </Switch>
        </div>
        </div>
    )
}
export default App; 