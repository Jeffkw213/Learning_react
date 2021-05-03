import Button from './button'
const body = ({text}) => {
    var boolean = true;
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = {boolean? 'blue' : 'green'} name='200' func={()=>{myfunction(boolean)}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(bool){
    consol
    return bool? false: true
}

export default body
