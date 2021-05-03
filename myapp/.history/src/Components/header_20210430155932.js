import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title, Color}) => {
    return (
        <header className= 'header'>
            <h1>{title}</h1>
            <Button color ='green' name='me' func= {() => myfunction()}/>
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
    console.log('me button');
}

export default Header
