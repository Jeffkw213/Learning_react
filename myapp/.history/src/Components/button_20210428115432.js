import React from 'react'

const button = ({name}) => {
    return (
        <div>
            <button className='btn'>{name}</button>
        </div>
    )
}

Header.defaultProps = {
    title: "What are we doing",
}

export default button
