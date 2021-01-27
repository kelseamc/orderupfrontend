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
        <div className="cart">
              <h2 >Cart</h2>
            <div className="total">
                <table>
                    <tbody>
                    {orderPreview}
                    </tbody>
                </table>
                
            </div>
            <h2>Total: ${total.toFixed(2)}</h2>
            <NavLink exact to="/orders/new">
                <button className="preview-button"> Go To Checkout</button>
            </NavLink>
        </div>
    )
}

export default OrderPreview;