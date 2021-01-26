import React,{useState} from "react";

function EditForm({order, onEditText}) {

    const [text, setText] = useState(order.text)

    const updatedObj = {text: text}

    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:3001/api/v1/orders/${order.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedObj)
        })
        .then(r => r.json())
        .then((updatedOrder) => {
            onEditText(updatedOrder)
        })
    }


    return (
        <div>
            Edit Delivery Instructions
            <form onSubmit={handleSubmit}>
            <input 
                    type="text-area" 
                    name="text"
                    value={text}
                    onChange={(e) =>setText(e.target.value)} 
                    />
                 <input type="submit" value="Update" />
               
            </form>
        </div>
    )
}

export default EditForm;