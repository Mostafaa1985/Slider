import React, { useEffect, useReducer } from 'react'


const initState = {
    barbarian: 0,
    archer: 0,
    giant: 0,
    goblin: 0,
    wizard: 0
}


const actionTypes = {
    increment: 'increment',
    decrement: 'decrement'
}

function reducer(state, action) { 

    switch (action.type) {

        case actionTypes.increment:
            {
                return {
                    ...state,
                    [action.name]: state[action.name]++
                }
            }

        case 'decrement':
            {
                return {
                    ...state,
                    [action.name]: state[action.name] > 0 ? state[action.name]-- : 0
                }
            }
        default:

            return state
    }
    
}


export default function Count({ name, id }) {


    const [state, dispatch] = useReducer(reducer, initState)
    function increment() {
        setTimeout(() => {
            dispatch({
                type: actionTypes.increment,
                id: id,
                name: name
            })
            console.log(state[name])
            console.log(name)

        }, 500)

    }

    function decrement() {
        setTimeout(() => {
            dispatch({
                type: actionTypes.decrement,
                id:  id ,
                name:  name 
            })
        }, 500)
    }



    useEffect(() => {        
    }, [id])


    return (
        <div className='counter'>
            <button onClick={decrement} className='bg-info'>-</button>
            <p className='count'>{state[name]}</p>
            <button onClick={increment} className='bg-success'>+</button>
        </div>
    )
}