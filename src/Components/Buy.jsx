import React from 'react'
import BuyFunction from './BuyFunction'
import BuyClass from './BuyClass'

function Buy({name}) {
    
    return (
        <div className='badge-wrapper'>
            <BuyFunction name={name} />            
        </div>
    )
}

export default Buy
