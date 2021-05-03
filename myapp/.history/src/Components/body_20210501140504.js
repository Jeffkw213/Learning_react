import Button from './button'
const body = ({text}) => {
    var change = 'green'
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color =  name='200' func={()=>{myfunction('green')}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(color){
    console.log(color)
}

export default body
