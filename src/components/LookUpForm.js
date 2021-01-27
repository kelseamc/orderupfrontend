import React, {useState} from 'react'

function LookUpForm ({onSearchSubmit}) {

    const [phone, setPhone] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        onSearchSubmit(phone)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text" 
                    name="phone" 
                    value={phone}
                    placeholder="911"
                    onChange={(e) => setPhone(e.target.value)}/>
                    <br />
                    <br />
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default LookUpForm