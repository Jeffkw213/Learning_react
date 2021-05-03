import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = {change} name='200' func={()=>{myfunction()}}/>
                <p id='text'></p>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(){
    document.getElementById
}

export default body
