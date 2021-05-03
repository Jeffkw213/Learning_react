import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button ='200'func={()=>{ myFunction()}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myFunction(){
    document.getElementsByName('200').style.color = 'red';
}

export default body
