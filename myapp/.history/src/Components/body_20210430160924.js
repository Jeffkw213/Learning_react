import Button from './button'
const body = ({text}) => {
    var boolean = true;
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = {} name='200' func={()=>{myfunction('red')}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(color){
    color = 'blue';
}


export default body
