import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = 'red' name='200' func={()=>{myfunction}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}



export default body