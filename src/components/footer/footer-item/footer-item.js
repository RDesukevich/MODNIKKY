import FacebookLogo from '../../../images/facebok-logo.svg'
import OdnoklassnikiLogo from '../../../images/odnoklassniki-logo.svg'
import InstagramLogo from '../../../images/instagram-logo.svg'

import './footer-item.css'

const FooterItem = () => {
    return (
        <div className='footer-list-item d-flex justify-content-between'>
            <ul className='footer-item '>
                <h3 className='footer-item-header'>CUSTOMER SERVICE</h3>
                <a href='#'><li>CONTACT</li></a>
                <a href='#'><li>TRACK ORDER</li></a>
                <a href='#'><li>DELIVERY & RETURNS</li></a>
                <a href='#'><li>PAYMENT</li></a>
                <a href='#'><li>MAKE A RETURN</li></a>
                <a href='#'><li>FAQ</li></a>
            </ul>
            <ul className='footer-item'>
                <h3 className='footer-item-header'>INFO</h3>
                <a href='#'><li>GIFT VOUCHERS</li></a>
                <a href='#'><li>SIZE GUIDE</li></a>
                <a href='#'><li>CAREERS AT MODNIKKY</li></a>
                <a href='#'><li>ABOUT US</li></a>
                <a href='#'><li>LEGAL POLICIES</li></a>
            </ul>
            <ul className='footer-item'>
                <h3 className='footer-item-header'>FOLLOW US</h3>
                <a href='#'>
                    <li>
                        <img className='footer-image'
                             src={FacebookLogo}
                             alt={FacebookLogo.value}/>FACEBOOK
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <img className='footer-image'
                             src={OdnoklassnikiLogo}
                             alt={OdnoklassnikiLogo.value}/>ODNOKLASSNIKI
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <img className='footer-image'
                             src={InstagramLogo}
                             alt={InstagramLogo.value}/>INSTAGRAM
                    </li>
                </a>
            </ul>
            <ul className='footer-item'>
                <h3 className='footer-item-header'>CONTACT US</h3>
                <a href='#'><li>hello@modnikky.com</li></a>
                <a href='#'><li>+7 910 832 26XX</li></a>
                <a href='#'><li>Visit us at Shalalaeva 23,<br/>Bologoe, Russia</li></a>
            </ul>
        </div>
    )
}

export default FooterItem