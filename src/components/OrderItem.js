import React from "react"

function OrderItem({item}) {

    return(
        <div>
            <h4>{item.name}</h4>
            <p>${item.price}</p> 
        </div>
    )
}

export default OrderItem