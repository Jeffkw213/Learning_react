import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={}/>
                <Button name='200'/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}


export default body
