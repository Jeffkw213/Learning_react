import React from 'react'

const button = ({name}) => {
    return (
        <div>
            <button className='btn'>ADD</button>
        </div>
    )
}

button.defultProps = {
    name: "button"
}

export default button
