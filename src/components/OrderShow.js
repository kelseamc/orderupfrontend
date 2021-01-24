import React from "react";
import OrderItem from "./OrderItem"

function OrderShow({addedItems}) {


    const orderCheckout = addedItems.map((item, index) => 
    <OrderItem
    key={index} 
    item={item} 
    />)
    
    return (
        <div>
            Order Show
            {orderCheckout}
        </div>
    )
}

export default OrderShow;