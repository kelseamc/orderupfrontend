import React from "react"

function OrderItem({item, onSubtract, onAddClick}) {

    const price = (item.price * item.quantity).toFixed(2)
    
    function handleSubtractClick(event) {
        onSubtract(item.id)
    }
    
    function handleAddClick(event) {
        onAddClick(item.id)
    }



    return(
                <tr>
                    <td>
                    <h4>{item.name}</h4>
                    </td>
                    <td>
                    {item.quantity === 1 ? 
                    <button onClick={handleSubtractClick}>Remove</button> : <button onClick={handleSubtractClick}>-</button> } 
                  
                    <span className="quantity">
                        {item.quantity}
                    </span> 
                    <button onClick={handleAddClick}>+</button>
                    </td>
                    <td className="price">
                    <p>${price}</p> 
                    </td>
                </tr>
    
    )
}

export default OrderItem