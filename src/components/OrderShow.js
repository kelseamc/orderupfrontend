import React from "react";
import OrderItem from "./OrderItem"

function OrderShow({addedItems, onSubtract, onAddClick, total}) {



    const orderCheckout = addedItems.map((item, index) => {
      
     return <OrderItem
            key={index} 
            item={item}
            onSubtract={onSubtract} 
            onAddClick={onAddClick}
            />
    })

  

    return (
        <div>
            <h2>Your Cart</h2>
            <table className="orderShow">
                <tbody>
                {orderCheckout}
                </tbody>
            </table>
            <h3>Total: $ {total.toFixed(2)}</h3>
        </div>
    )
}

export default OrderShow;