import React from 'react'

const button = ({name}) => {
    return (
        <div>
            <button className>{name}</button>
        </div>
    )
}

button.defultProps = {
    name: "button"
}

export default button
