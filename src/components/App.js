import React from "react";
import Header from "./Header"
import { Redirect, Route, Switch } from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderContainer from "./pages/OrderContainer"
import Home from "./pages/Home"

function App() {

    

    return(
        <div>
        <Header />
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/orders/:id" >
                <OrderConfirmation />
            </Route>
            <Route exact path="/orders/new" >
                <OrderContainer />
            </Route>
        </Switch>
        </div>
    )
}
export default App; 