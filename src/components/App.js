import React, {useState, useEffect} from "react";
import Header from "./Header"
import { Route, Switch } from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderContainer from "./pages/OrderContainer"
import Home from "./pages/Home"



function App() {
    const [menuItems, setMenuItems] = useState([])
    const [addedItems, setAddedItems] = useState([])
    const [category, setCategory] = useState("appetizer")
    
    
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/menu_items")
        .then(r => r.json())
        .then((itemArray) => {
            setMenuItems(itemArray)
        })
    }, [])

/******************** Handling Ordered Items *****************************/
    
    function handleAddItem(itemId) {
        const findItem = addedItems.find((i) => i.id === itemId)
        if (findItem) {
           const updateAdded = addedItems.filter((i) => {
            if (i.id === itemId) {
                let add = i.quantity ++
                return {...i, quantity: add}
                }
            else {
                return i
            }
            })
            setAddedItems(updateAdded)
        }
        else {
            let newItem = menuItems.find((item) => item.id === itemId)
            newItem = {...newItem, quantity: 1}
            setAddedItems([...addedItems, newItem])
         }
    }

/******************** Filtering *****************************/


   const filteredMenuItems = menuItems.filter((item) => item.category === category)


/******************** JSX *****************************/

        
    return(
        <div className="app">
        <div className="header"><Header /></div>
        <div className="body">
        <Switch>
            <Route exact path="/" >
                <Home menuItems={filteredMenuItems} onAddItem={handleAddItem} addedItems={addedItems} category={category} setCategory={setCategory}/>
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