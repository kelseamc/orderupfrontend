import React from "react";

function OrderMessage({orderedItems, time, setTime, setAddedItems}) {
    
    console.log(orderedItems)
    

 
    function dingdong() {
        if (time === 1) {
            window.location.reload(false)
        }
        else if (time > 0){
            setTime((time) => time-1)
        }
    }

    function timer() {
        setTimeout(dingdong, (1000))
        
    }

    console.log(time)

    return (
        <div>
            <h2>Thank You for Your Order!</h2>
           {time === 0 ? <h3>Your Order Is Ready!! </h3> : <h3 onLoad={timer()}>Your order will be ready in {time} minutes</h3> }
        </div>
    )
}

export default OrderMessage;