import React from "react";
import OrderPreviewItem from "./OrderPreviewItem"
import { NavLink } from "react-router-dom";

function OrderPreview({addedItems, total}) {

    // let total = 0

    const orderPreview = addedItems.map((item, index) => {
        // total = total + (item.price * item.quantity)
        
    return <OrderPreviewItem 
            key={index} 
            item={item} />
    
    })

    return (
        <div>
              Order Preview
            <div>
                <ul>
                    {orderPreview}
                </ul>
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
            <NavLink exact to="/orders/new">
                <button>Go To Checkout</button>
            </NavLink>
        </div>
    )
}

export default OrderPreview;