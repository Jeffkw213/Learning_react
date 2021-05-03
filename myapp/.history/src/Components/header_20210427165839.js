const Header = ({}}) => {
    return (
        <header>
            <h1> {props.title} </h1>
        </header>
    )
}

Header.defaultProps = {
    title: "What in the"
}

export default Header
