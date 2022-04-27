import './shop-filter-item.css'

const ShopFilterItem = (props) => {
    const {imgUrl, name} = props;
    return(
        <div className='filter-item d-flex justify-content-center align-items-center'>
            <img className='img-filter' src={imgUrl} alt='logo'/>
            <p className='text-filter'>{name}</p>
        </div>
    )
}

export default ShopFilterItem