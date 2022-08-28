import React from 'react'
import BuyFunction from './BuyFunction'

function Buy({name}) {
    
    return (
        <div className='badge-wrapper'>
            <BuyFunction name={name} />            
        </div>
    )
}

export default Buy
