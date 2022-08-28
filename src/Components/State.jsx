import React from 'react'


function State({state, value, noBorder}) {
    let className = 'one-third '
    if(noBorder) {
        className += 'no-border'
    }
    return (
        <div className={className}>
            <div className="stat">{state}</div>
            <div className="stat-value">{value}</div>
        </div>

    )
}

export default State
