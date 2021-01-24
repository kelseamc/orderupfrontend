import React from "react";
import OrderShow from "../OrderShow"
import OrderForm from "../OrderForm"

function OrderContainer({addedItems}) {

    return (
        <div className="container">
            <div className="details1"><OrderShow addedItems={addedItems}/></div>
            <div className="form"><OrderForm /></div>
        </div>
    )
}

export default OrderContainer;