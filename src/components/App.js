import React, {useState, useEffect} from "react";
import Header from "./Header"
import { Route, Switch, useHistory } from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderContainer from "./pages/OrderContainer"
import Home from "./pages/Home"



function App() {
    const [menuItems, setMenuItems] = useState([])
    const [addedItems, setAddedItems] = useState([])
    const [category, setCategory] = useState("appetizer")
    const [order, setOrder] = useState({})
    const [orderedItems, setOrderedItems ] = useState([])
    // const [orderTotal, setOrderTotal] = useState(0)
    
    const history = useHistory()

   


    useEffect(() => {
        fetch("http://localhost:3001/api/v1/menu_items")
        .then(r => r.json())
        .then((itemArray) => {
            setMenuItems(itemArray)
        })
    }, [])


/******************** CRUD handling  *****************************/

function handleNewOrder(orderObj){
    setOrder(orderObj)
    // console.log(orderObj)
    let newArray = []
    addedItems.map((item) => {
        const orderItem = {menu_item_id: item.id, order_id: orderObj.id, quantity: item.quantity }
        fetch("http://localhost:3001/api/v1/order_items", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        })
        .then(r => r.json())
        .then((orderItemDb) => {
            return newArray.push(orderItemDb)
        })
    
    })
    setOrderedItems(...orderedItems, newArray)
    history.push(`/orders/${orderObj.id}`)
    
}

    console.log(order)

    function handleDelete(){
        console.log("deleted")
    }


// console.log('Ordered Items' + (orderedItems))

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
    

    function onSubtract(id){
        const updatedOrderItems = addedItems.filter((i) =>{
            if (i.id === id) {
                if(i.quantity > 1) {
                    let sub = i.quantity - 1
                    // console.log(sub)
                    i["quantity"] = sub
                    return {...i, quantity: sub}
                } 
            }
            else {
                return i
            }
            
        } )
        setAddedItems(updatedOrderItems)
    }

    function onEditText(orderObj){
        setOrder(orderObj)
    }

   
/******************** Filtering *****************************/


   const filteredMenuItems = menuItems.filter((item) => item.category === category)
   let total = 0 
   const orderTotal = addedItems.map((item) => {
       let price = item.price * item.quantity
       total = total + price
   }) 

   console.log(total)

/******************** JSX *****************************/

        
    return(
        <div className="app">
        <div className="header"><Header /></div>
        <div className="body">
        <Switch>
            <Route exact path="/" >
                <Home 
                menuItems={filteredMenuItems} 
                onAddItem={handleAddItem} 
                addedItems={addedItems} 
                category={category} 
                setCategory={setCategory}
                total={total}
                />
            </Route>
            <Route exact path="/orders/new" >
                <OrderContainer 
                addedItems={addedItems} 
                onSubtract={onSubtract} 
                onAddClick={handleAddItem} 
                onNewOrder={handleNewOrder} 
                total={total}
            />
            </Route>
            <Route exact path="/orders/:id" >
                <OrderConfirmation 
                orderedItems={addedItems}
                order={order}
                total={total}
                onDelete={handleDelete}
                onEditText={onEditText}
                />
            </Route>
           
        </Switch>
        </div>
        </div>
    )
}
export default App; 