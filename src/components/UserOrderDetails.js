import React from 'react';

function UserOrderDetails({order}){

    const items = order.order_items.map((item) => 
    <tr>
        <td>
            {item.menu_item.name}
        </td>
        <td>
            {item.quantity}
        </td>
        <td >
            ${(item.menu_item.price * item.quantity).toFixed(2)}
        </td>
    </tr>
    

    )
    return(
        <div className="order-box">
            <h4>Total: ${order.total.toFixed(2)}</h4>
            <p>{order.created_at.substring(0, 10)}</p>
            <table className="item-table">
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    )
}


export default UserOrderDetails;