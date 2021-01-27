import React,{useState} from "react";

function EditForm({order, onEditText, time}) {

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
            <h2>Edit Delivery Instructions</h2>
            <form onSubmit={handleSubmit}>
                <br />
            <textarea
                    type="text-area" 
                    name="text"
                    value={text}
                    onChange={(e) =>setText(e.target.value)} 
                    /><br></br><br></br>
                {time === 0 ? "Too Late. We're Here :)" : <input type="submit" value="Update" /> }
               
            </form>
        </div>
    )
}

export default EditForm;