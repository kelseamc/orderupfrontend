import React from "react";

function Nav({setCategory, category}){


    function handleClick(event){
        setCategory(event.target.value)
    }
    
    return(
        <div>
            <option value="appetizer" onClick={handleClick}>Apps</option>
            <option value="salad" onClick={handleClick}>Salads</option>
            <option value="entree" onClick={handleClick}>Entrees</option>
            <option value="pizza" onClick={handleClick}>Pizza</option>
            <option value="Pasta" onClick={handleClick}>Pasta</option>
            <option value="dessert" onClick={handleClick}>Desserts</option>
        </div>
    )
}

export default Nav;