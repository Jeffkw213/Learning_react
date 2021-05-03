import PropTypes from 'prop-types'

const body = ({text}) => {
    return (
        <div>
            <body>{text}</body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

body.propTypes= {
    title:PropTypes.string.isRequired,
}


export default body
