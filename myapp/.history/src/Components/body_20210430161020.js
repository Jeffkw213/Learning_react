import Button from './button'
const body = ({text}) => {
    var boolean = true;
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = {boolean? 'blue' : 'green'} name='200' func={()=>{boolean = false}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}




export default body
