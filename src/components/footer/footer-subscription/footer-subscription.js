import './footer-subscription.css'

const FooterSubscription = () => {
    return(
        <div className='footer-subscription'>
            <h3 className='footer-subscription-title text-center'>SIGN UP FOR UPDATES</h3>
            <p className='footer-promo-text text-center'>Sign up for exclusive early sale access and tailored new arrivals.</p>
            <form className='footer-subscription-form d-flex justify-content-between'>
                <input className='footer-email-input' placeholder='Your email address'/>
                <button className='footer-button'>JOIN</button>
            </form>
        </div>
    )
}

export default FooterSubscription