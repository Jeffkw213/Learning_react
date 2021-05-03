import Button from './button'
const body = ({text}) => {
    var boolean = true;
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = 'green' name='200' func={()=>{myfunction(color)}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(bool){
    console.log(bool)
}

export default body
