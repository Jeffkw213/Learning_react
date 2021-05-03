import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title}) => {
    return (
        <header className= 'header'>
            <h1>{title}</h1>
            <Button name='me'/>
        </header>
    )
}

Header.defaultProps = {
    title: "What ",
}

Header.propTypes= {
    title:PropTypes.string.isRequired,
}

export default Header
