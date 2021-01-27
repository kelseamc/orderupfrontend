import React from "react";

function Nav({setCategory, category}){


    function handleClick(event){
        setCategory(event.target.value)
    }
    
    return(
        <div>
            <option className={(category === "appetizer") ? "selected" : "not-selected"} value="appetizer" onClick={handleClick}>Apps</option>
            <option className={(category === "salad") ? "selected" : "not-selected"}value="salad" onClick={handleClick}>Salads</option>
            <option className={(category === "entree") ? "selected" : "not-selected"}value="entree" onClick={handleClick}>Entrees</option>
            <option className={(category === "pizza") ? "selected" : "not-selected"}value="pizza" onClick={handleClick}>Pizza</option>
            <option className={(category === "Pasta") ? "selected" : "not-selected"}value="Pasta" onClick={handleClick}>Pasta</option>
            <option className={(category === "dessert") ? "selected" : "not-selected"}value="dessert" onClick={handleClick}>Desserts</option>
        </div>
    )
}

export default Nav;