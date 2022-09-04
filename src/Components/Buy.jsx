import React, {useState, useEffect} from 'react'
import BuyBtn from './BuyFunction'
import Count from './Count'
import Max from './Max'
function Buy({ name, id }) {
    const [max, setMax] = useState(0)
    useEffect(() => {
      const fethMax = setInterval(() => {
           fetch(`http://localhost:3000/restricts?hero_id=${id}`)
               .then(response => response.json())
               .then(restrict => {
                   setMax(restrict[0].max)                   
               })
            }, 2000) 

            return () => clearInterval(fethMax)
       }, [id])

    return (
        <div className='buy-wrapper'>
            <Max max={ max } />
            <Count />
            <BuyBtn name={name} />
        </div>

    )
}

export default Buy
