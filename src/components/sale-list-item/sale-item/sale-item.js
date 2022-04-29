import './sale-item.css'

const SaleItem = (props) => {
    const {price, imgUrl, like, discount, discountPrice} = props;
    return(
        <div className='sale-item'>
            <div className='sale-img'>
                <img className='sale-like' src={like} alt={like.value}/>
                <img className='sale-img' src={imgUrl} alt={imgUrl.value}/>
                <span className='sale-discount'>{discount}</span>
            </div>
            <div className='sale-text'>
                <span className='sale-price'>{price}</span>
                <span className='sale-discountPrice'>{discountPrice}</span>
            </div>
        </div>
    )
}

export default SaleItem