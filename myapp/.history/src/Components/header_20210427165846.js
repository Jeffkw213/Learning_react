const Header = ({title}) => {
    return (
        <header>
            <h1> {title} </h1>
        </header>
    )
}

Header.defaultProps = {
    title: "What in the"
}

export default Header
