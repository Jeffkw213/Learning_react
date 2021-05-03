import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100'/>
                <Button name='200'/>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}


export default body
