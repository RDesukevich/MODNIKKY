import React from "react";

import Navbar from "./Navbar";
import TopMenuText from "./TopMenuText";

import './TopMenu.Style.css'


const TopMenu = () => {
    return(
        <div className='top-menu'>
            <Navbar/>
            <TopMenuText/>
        </div>

    )
}

export default TopMenu;