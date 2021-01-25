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
            Order Show
            <table className="orderShow">
                <tbody>
                {orderCheckout}
                </tbody>
            </table>
            <h4>Total: $ {total.toFixed(2)}</h4>
        </div>
    )
}

export default OrderShow;