import React from "react"

function OrderItem({item}) {

    const price = item.price * item.quantity
    
    return(
        <div>
            <h4>{item.name}</h4>
            <span>{item.quantity} </span>
            <p>${price}</p> 
            <button>X</button>
        </div>
    )
}

export default OrderItem