import React from 'react'
import BuyBtn from './BuyFunction'
import Count from './Count'
// import Max from './Max'
function Buy({ name, id }) {

    return (
        <div className='buy-wrapper'>
            
            <Count />
            <BuyBtn name={name} />
        </div>

    )
}

export default Buy
