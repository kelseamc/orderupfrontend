import React,{useState} from 'react'
import LookUpForm from '../LookUpForm'
import UserOrderShow from '../UserOrderShow'

function OrderLookUp(){
    const [orders, setOrders] = useState([])

    function handleSearchSubmit(phone){

        fetch("http://localhost:3001/api/v1/orders")
        .then(r => r.json())
        .then((orderArray) => {
           const userOrders =  orderArray.filter((order) => parseInt(order.phone) === parseInt(phone))
           setOrders(userOrders)
        })

    }
    return (
        <div className="lookup">
        <div className="lookup-form"><LookUpForm onSearchSubmit={handleSearchSubmit}/></div>
        <div className="lookup-details"><UserOrderShow orders={orders}/></div>
        </div>
    )
}

export default OrderLookUp