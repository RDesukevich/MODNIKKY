import SaleItem from "./sale-item/sale-item";

import './sale-list-item.css'
const SaleListItem = ({dataSale}) => {
    const elements = dataSale.map(item => {
        const {id, ...itemProps} = item;
        return(
            <SaleItem
                key={id}
                {...itemProps}/>
        )
    })
    return (
        <div className='sale'>
            <h2 className='sale-header text-center'>#MODNIKKY<b>_Sale</b></h2>
            <div className='sale-list-item d-flex flex-row justify-content-center'>
                {elements}
            </div>
        </div>
    )
}

export default SaleListItem