import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function OrderForm({onNewOrder, total}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [card, setCard] = useState("")
    const [address, setAddress] = useState("")
    const [deliveryInstruction, setDeliveryInstruction] = useState("") /* might need to add to schema in backend*/
    
    const formData = {name, phone, card, address, text: deliveryInstruction, completed: false, total: total }
    const orderId = null /* set orderId to the id of the order returned in fetch response */


    function handleSubmit(event){
        event.preventDefault()

        fetch("http://localhost:3001/api/v1/orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then((newOrder) => {
            onNewOrder(newOrder)
          
            
        })
       

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <table className="orderForm">
                <tbody>
            <tr>
                <td>
                <label>Name
                </label>
                </td>
                <td>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    placeholder="Jane Doe"
                    onChange={(e) => setName(e.target.value)}/>
                </td>
            </tr>
       
            <tr>
                <td>
                <label>Phone Number
                </label>
                </td>
                <td>
                    <input 
                        type="text" 
                        name="phone"
                        value={phone}
                        placeholder="(555)123-4567"
                        onChange={(e) => setPhone(e.target.value)}/>
                </td>
            </tr>
            <tr>
                <td>
                <label>
                    Credit Card
                </label>
                </td>
                <td>
                    <input 
                        type="text" 
                        name="card"
                        value={card}
                        placeholder="1234-5678-9044"
                        onChange={(e) => setCard(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>
                <label>
                    Address
                </label>
                </td>
                <td>
                    <input 
                    type="text" 
                    name="address" 
                    value={address}
                    placeholder="123 Main Street"
                    onChange={(e) => setAddress(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>
                <label>
                    Delivery Instructions
                </label>
                </td>
                <td>
                    <textarea
                    type="textarea" 
                    name="deliveryInstruction"
                    placeholder="Enter instructions here"
                    value={deliveryInstruction}
                    onChange={(e) =>setDeliveryInstruction(e.target.value)} />
                </td>
            </tr>
            </tbody>
            </table>
            <p className="submit">
               
                <input type="submit" value="Place Order" />
               
            </p>  
            </form>
        </div>
    )
}

export default OrderForm;