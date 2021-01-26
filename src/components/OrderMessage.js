import React from "react";

function OrderMessage({orderedItems}) {
    
    console.log(orderedItems)
    
    let time = 0
    orderedItems.map((item) => {
        if (item.time > time){
            return time = item.time
        }
    })


    console.log(time)

    return (
        <div>
            <h2>Thank You for Your Order!</h2>
            <h3>Your order will be ready in {time} minutes</h3>
        </div>
    )
}

export default OrderMessage;