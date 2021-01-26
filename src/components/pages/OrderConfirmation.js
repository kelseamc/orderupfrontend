import React, {useEffect, useState} from "react";
import EditForm from "../EditForm"
import OrderDetails from "../OrderDetails"
import OrderMessage from "../OrderMessage"

function OrderConfirmation({orderedItems, order, total, onDelete, onEditText}) {
    const [orderItems, setOrderItems] = useState([])

//     useEffect(() => {
//         fetch(`http://localhost:3001/api/v1/orders/${order.id}`)
//         .then(r => r.json())
//         .then((orderObj) => {
         
//             setOrderItems(orderObj.order_items)
//         })
//     }, [])

//   console.log(orderItems)

    return (
        <div className="confirmation">
            <div className="edit"><EditForm order={order} onEditText={onEditText}/></div>
            <div className="details"><OrderDetails orderedItems={orderedItems} total={total} orderId={order.id} onDelete={onDelete}/></div> 
            <div className="message"><OrderMessage orderedItems={orderedItems}  /></div>
        </div>
    )
}

export default OrderConfirmation;