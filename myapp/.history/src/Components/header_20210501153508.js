import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title}) => {
    return (
        <header className= 'header'>
            <h1 id = 'title' >{title}</h1>
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
    document.getElementById('title').style.color = 'red';
    console.log("")
}

export default Header
