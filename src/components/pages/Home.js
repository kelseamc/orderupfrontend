import React from "react";
import OrderPreview from "../OrderPreview"
import Nav from "../Nav"
import MenuContainer from "../MenuContainer"

function Home() {
    

    return (
        <div>
            Home Page
            <OrderPreview />
            <Nav />
            <MenuContainer />
        </div>
    )
}

export default Home;