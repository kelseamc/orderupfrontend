import React from "react";
import EditForm from "../EditForm"
import OrderDetails from "../OrderDetails"
import OrderMessage from "../OrderMessage"

function OrderConfirmation() {

    return (
        <div className="confirmation">
            <div className="edit"><EditForm /></div>
            <div className="details"><OrderDetails /></div>
            <div className="message"><OrderMessage /></div>
        </div>
    )
}

export default OrderConfirmation;