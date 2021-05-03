import React from 'react'

const button = ({name}) => {
    return (
        <div>
            <button className='btn'>{name}</button>
        </div>
    )
}

button.defultProps = {
    name: "button"
}

export default button
