import React from "react";
import OrderShow from "../OrderShow"
import OrderForm from "../OrderForm"

function OrderContainer({addedItems, onSubtract, onAddClick, onNewOrder, total}) {

    return (
        <div className="container">
            <div className="details1">
                <OrderShow 
                addedItems={addedItems} 
                onSubtract={onSubtract} 
                onAddClick={onAddClick}
                total={total}/>
            </div>
            <div className="form">
                <OrderForm 
                onNewOrder={onNewOrder} 
                total={total} />
            </div>
        </div>
    )
}

export default OrderContainer;