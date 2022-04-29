import FooterSubscription from "./footer-subscription/footer-subscription";
import FooterItem from "./footer-item/footer-item";

import './footer.css'

const Footer = () => {

    return(
        <div className='footer'>
            <FooterSubscription/>
            <FooterItem/>
        </div>
    )
}

export default Footer