import React from "react";
import logo from '../orderupwhite.png'
import {useHistory } from "react-router-dom";
function Header() {

    let history = useHistory()

    function handleLogoClick(){
        history.push("/")
    }

    function handleOrderSearch(){
        history.push("/orders")
    }
    return(
        <div >
            <button onClick={handleOrderSearch}>Find My Orders</button>
            <img onClick={handleLogoClick} src={logo} alt="OrderUp Logo" />
        </div>
    )
}
export default Header;