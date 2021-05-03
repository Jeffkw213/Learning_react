import PropTypes from 'prop-types'

const body = ({text}) => {
    return (
        <div>
            <body>{text}</body>
        </div>
    )
}

body.defaultProps 

export default body
