import React from 'react'

const StepName = ({onNext}) => {
    return (
        <div>
            Step name
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StepName
