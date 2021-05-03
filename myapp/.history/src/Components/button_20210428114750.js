import React from 'react'

const button = ({name}) => {
    return (
        <div>
            <Button
            variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
        </div>
    )
}

button.defultProps = {
    name: "button"
}

export default button
