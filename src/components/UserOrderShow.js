import React from 'react'
import UserOrderDetails from './UserOrderDetails'

function UserOrderShow({orders}){

    const orderComponents = orders.map((order) => 
    <UserOrderDetails
             key={order.id} 
             order={order}
             /> )
    
    return(
        <div>
            {orderComponents}
        </div>
    )
}

export default UserOrderShow