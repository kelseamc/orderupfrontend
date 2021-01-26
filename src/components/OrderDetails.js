import React from "react";
import OrderDetailItem from "./OrderDetailItem"
import OrderMessage from "./OrderMessage"

function OrderDetails({orderedItems, total, orderId, onDelete}) {

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
        <div>
            <table className="orderShow">
                <tbody>
                {orderConfirm}
                </tbody>
            </table>
            <h4>Total: $ {total.toFixed(2)}</h4> <button onClick={handleDelete}>Cancel Order</button>
        </div>
    )
}

export default OrderDetails;