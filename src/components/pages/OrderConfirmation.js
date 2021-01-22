import React from "react";
import EditForm from "../EditForm"
import OrderDetails from "../OrderDetails"
import OrderMessage from "../OrderMessage"

function OrderConfirmation() {

    return (
        <div>
            Order Confirmation 
            <EditForm />
            <OrderDetails />
            <OrderMessage />
        </div>
    )
}

export default OrderConfirmation;