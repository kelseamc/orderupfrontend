import React from 'react'

function OrderDetailItem({item}){

    console.log(item)
    const price = (item.price * item.quantity).toFixed(2)

    return (
        <tr>
                    <td>
                         <h4>{item.name}</h4>
                    </td>
                    <td>
                        <span className="quantity">
                            {item.quantity}
                        </span> 
                    </td>
                    <td className="price">
                        <p>${price}</p>
                    </td>
                </tr>
    )
}

export default OrderDetailItem