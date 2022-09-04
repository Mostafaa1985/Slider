import React, {useState, useEffect} from 'react'
import BuyBtn from './BuyFunction'
import Count from './Count'
import Max from './Max'
function Buy({ name }) {
    const [max, setMax] = useState(0)
    useEffect(() => {
        fetch('http://localhost:3000/restricts?hero_id=2')
        .then(response => response.json())
        .then(restrict => {
            console.log(restrict)
        })
    })

    return (
        <div className='buy-wrapper'>
            <Max max={max} />
            <Count />
            <BuyBtn name={name} />
        </div>

    )
}

export default Buy
