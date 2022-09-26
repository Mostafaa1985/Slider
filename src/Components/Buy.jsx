import React from 'react'
import BuyBtn from './BuyFunction'
import Count from './Count'
// import Max from './Max'
function Buy({ name, id }) {

    return (
        <div className='buy-wrapper'>
            
            <Count id ={id} name ={name} />
            <BuyBtn name={name} />
        </div>

    )
}

export default Buy
