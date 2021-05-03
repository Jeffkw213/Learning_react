import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button name=''/>
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
