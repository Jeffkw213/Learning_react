import PropTypes from 'prop-types'
impor
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "What are we doing",
}

Header.propTypes= {
    title:PropTypes.string.isRequired,
}

export default Header
