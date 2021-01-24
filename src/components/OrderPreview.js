import React from "react";
import OrderPreviewItem from "./OrderPreviewItem"
import { NavLink } from "react-router-dom";

function OrderPreview({addedItems}) {

    const orderPreview = addedItems.map((item, index) => 
    <OrderPreviewItem 
    key={index} 
    item={item} />)

    return (
        <div>
            Order Preview
            {orderPreview}
            <NavLink exact to="/orders/new">
                <button>Go To Checkout</button>
            </NavLink>
        </div>
    )
}

export default OrderPreview;