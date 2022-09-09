import React, { useState, useEffect } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)

    
    function increment() {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1)            
        }, 500)
    }

    function decrement() {
        setTimeout(() => {
           if (count > 0 ) setCount( count - 1 ) 
        }, 500)
    }

    useEffect(() => {
        console.log('effect');
    })

    return (
        <div className='counter'>
            <button onClick={decrement} className='bg-info'>-</button>
            <p className='count'>{count}</p>
            <button onClick={increment} className='bg-success'>+</button>
        </div>
    )
}