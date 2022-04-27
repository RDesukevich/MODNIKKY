import React from "react";

import Images from "../../images/brand-logo.svg"
import Search from "../../images/Search.svg"
import Like from "../../images/wishlist-icon.svg"
import Burger from "../../images/hamburger-menu-icon.svg"
import Bag from "../../images/Bag.svg"

const Navbar = () => {
    return(
        <nav className='d-flex justify-content-between col nav'>
            <div className='d-flex align-items-center'>
                <a>
                    <img className='burger-icon' src={Burger} alt={Burger}/>
                </a>
                <a className='nav-link'>NEW ARRIVALS</a>
                <a className='nav-link'>SHOP</a>
                <a className='nav-link'>COLLECTION</a>
            </div>
            <div>
                <a>
                    <img className='img-logo' src={Images} alt='logo'/>
                </a>
            </div>
            <div className='d-flex align-items-center'>
                <div className='d-flex flex-row'>
                    <img className='search-icon' src={Search} alt='search'/>
                    <a className='nav-link search-link'>SEARCH</a>
                </div>
                <a className='nav-link'>SIGN IN</a>
                <a>
                    <img className='bag-icon' src={Bag} alt='Bag'/>
                </a>
                <a href='#' className='nav-link'>BAG (2)</a>
                <a>
                    <img className='like-icon' src={Like} alt='like'/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar