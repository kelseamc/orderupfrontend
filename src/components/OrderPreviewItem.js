import React from "react"

function OrderPreviewItem({item}) {
    
    return(
        <>
        <li>{item.name}  Qt.{item.quantity}</li>
        </>

    )
}

export default OrderPreviewItem