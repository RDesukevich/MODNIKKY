import Instagram from '../../../images/mask-instagram.svg'
import Instagram1 from '../../../images/mask-instagram1.svg'
import Instagram2 from '../../../images/mask-instagram2.svg'
import Instagram3 from '../../../images/mask-instagram3.svg'
import Instagram4 from '../../../images/mask-instagram4.svg'

import './shop-instagram-item.css'

const ShopInstagramItem = () => {
    return(
        <div className='shop-instagram-item d-flex'>
            <div className=''>
                <img className='shop-instagram-img' src={Instagram} alt={Instagram.value}/>
            </div>
            <div className=''>
                <img className='shop-instagram-img' src={Instagram1} alt={Instagram1.value}/>
                <img className='shop-instagram-img' src={Instagram2} alt={Instagram2.value}/>
                <img className='shop-instagram-img' src={Instagram3} alt={Instagram3.value}/>
                <img className='shop-instagram-img' src={Instagram4} alt={Instagram4.value}/>
            </div>
        </div>
    )
}

export default ShopInstagramItem