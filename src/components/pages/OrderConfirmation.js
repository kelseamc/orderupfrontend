import React, {useEffect, useState} from "react";
import EditForm from "../EditForm"
import OrderDetails from "../OrderDetails"
import OrderMessage from "../OrderMessage"

function OrderConfirmation({orderedItems, order, total, onDelete, onEditText, setAddedItems}) {
    const [orderItems, setOrderItems] = useState([])

    let itemTime = 0
    orderedItems.map((item) => {
        if (item.time > itemTime){
             itemTime = item.time
             return itemTime
        }
    })

    const [time, setTime] = useState(itemTime)

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
            <div className="edit"><EditForm order={order} onEditText={onEditText} time={time}/></div>
            <div className="details"><OrderDetails orderedItems={orderedItems} total={total} orderId={order.id} onDelete={onDelete} time={time}/></div> 
            <div className="message"><OrderMessage orderedItems={orderedItems}  time={time} setTime={setTime} setAddedItems={setAddedItems}/></div>
        </div>
    )
}

export default OrderConfirmation;