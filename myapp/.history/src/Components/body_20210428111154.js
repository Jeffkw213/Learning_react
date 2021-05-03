import PropTypes from 'prop-types'

const body = ({text}) => {
    return (
        <div>
            <body>{text}</body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif"
}


export default body
