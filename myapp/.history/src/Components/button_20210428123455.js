ra
const button = ({name, func}) => {
    return (
        <div>
            <button className='btn' onClick={func}>{name}</button>
        </div>
    )
}

button.defaultProps = {
    name: "button",
}

export default button
