import ShopInstagramItem from "./shop-intagram-item/shop-instagram-item";

import NextIcon from '../../images/next-icon.svg'

import './shop-instagram.css'

const ShopInstagram = () => {
    return(
        <div className='shop-instagram'>
            <div className='shop-cta'>
                <span className='shop-title shop-instagram-text'>SHOP INSTAGRAM</span>
                <span className='shop-link shop-instagram-text'>SHOP</span>
                <img className='shop-instagram-next-icon' src={NextIcon} alt={NextIcon.value}/>
            </div>
            <ShopInstagramItem/>
            <div className='shop-instagram-footer'>
                <span className='shop-instagram-text'>#MODNIKKY</span>
            </div>
        </div>
    )
}

export default ShopInstagram