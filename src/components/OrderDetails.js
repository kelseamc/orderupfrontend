import React from "react";
import OrderDetailItem from "./OrderDetailItem"
import OrderMessage from "./OrderMessage"

function OrderDetails({orderedItems, total, orderId, onDelete, time}) {

    const orderConfirm = orderedItems.map((item, index) => 
      <OrderDetailItem
               key={index} 
               item={item}
               />
       )

       function handleDelete(event){
            fetch(`http://localhost:3001/api/v1/orders/${orderId}`, {
                method: "DELETE"
            })
            .then(r => r.json())
            .then(() => {
                onDelete()
            })
            

       }

    return (
        <div className="order-details">
            <h2>Your Order</h2>
            <table className="orderShow">
                <tbody>
                {orderConfirm}
                </tbody>
            </table>
            <h3>Total: $ {total.toFixed(2)}</h3> 
            {time === 0 ? "Too late for refunds :)" :
            <button onClick={handleDelete}>Cancel Order</button>}
        </div>
    )
}

export default OrderDetails;