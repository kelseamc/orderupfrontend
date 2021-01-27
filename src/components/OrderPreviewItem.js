import React from "react"

function OrderPreviewItem({item}) {
    
    return(
        <>
        <tr>
            <td>
            {item.name} 
            </td>
            <td>
             Qt.{item.quantity}
             </td>
             </tr>
        </>

    )
}

export default OrderPreviewItem