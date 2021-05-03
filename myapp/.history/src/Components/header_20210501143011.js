import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title}) => {
    return (
        <header id = className= 'header'>
            <h1>{title}</h1>
            <Button name='me' func= {() => myfunction()}/>
        </header>
    )
}

Header.defaultProps = {
    title: "What are we doing",
}

Header.propTypes= {
    title:PropTypes.string.isRequired,
}

function myfunction(){
    document.getElementsByName('header').values;
}

export default Header
