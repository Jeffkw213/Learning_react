import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className= 'header'>
            <h1>{title}</h1>
            <Button color={showAdd? 'green' : 'red'} name='me' onClick{showAdd}/>
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
