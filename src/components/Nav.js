import React from "react";

function Nav({setCategory, category}){


    function handleClick(event){
        setCategory(event.target.value)
    }
    
    return(
        <div>
            <br />
            <option value="appetizer" onClick={handleClick}>Apps</option>
            <br />
            <option value="salad" onClick={handleClick}>Salads</option>
            <br />
            <option value="entree" onClick={handleClick}>Entrees</option>
            <br />
            <option value="pizza" onClick={handleClick}>Pizza</option>
            <br />
            <option value="Pasta" onClick={handleClick}>Pasta</option>
            <br />
            <option value="dessert" onClick={handleClick}>Desserts</option>
        </div>
    )
}

export default Nav;