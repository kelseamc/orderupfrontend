import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function OrderForm() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [card, setCard] = useState("")
    const [address, setAddress] = useState("")
    const [deliveryInstruction, setDeliveryInstruction] = useState("") /* might need to add to schema in backend*/
    
    const formData = {name, phone, card, address, deliveryInstruction}
    const orderId = null /* set orderId to the id of the order returned in fetch response */

    function handleSubmit(event){
        event.preventDefault()

        //send a POST request with formData in the body
        // should get an order object back from the server in the response

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </label><br></br>
                <label>Phone Number
                    <input 
                        type="text" 
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                </label><br></br>
                <label>
                    Credit Card
                    <input 
                        type="text" 
                        name="card"
                        value={card}
                        onChange={(e) => setCard(e.target.value)} />
                </label><br></br>
                <label>
                    Address
                    <input 
                    type="text" 
                    name="address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                </label><br></br>
                <label>
                    Delivery Instructions
                    <input 
                    type="text-area" 
                    name="deliveryInstruction"
                    value={deliveryInstruction}
                    onChange={(e) =>setDeliveryInstruction(e.target.value)} />
                </label>
                <NavLink exact to="/order/1">
                <input type="submit" value="Place Order"/>
                </NavLink>
            </form>
        </div>
    )
}

export default OrderForm;