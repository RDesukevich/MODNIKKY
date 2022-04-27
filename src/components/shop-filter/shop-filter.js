import ShopFilterItem from "./shop-filter-item/shop-filter-item";

import './shop-filter.css'
const ShopFilter = ({dataCategory}) => {
    const elements = dataCategory.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ShopFilterItem
                key={id}
                {...itemProps}/>
        )
    })

    return (
        <div className='shop-filter'>
            <h2 className='filter-header text-center'>Shop by the<b> Category</b></h2>
            <div className='list-filter d-flex flex-row justify-content-center'>
                {elements}
            </div>
        </div>
    )
}

export default ShopFilter