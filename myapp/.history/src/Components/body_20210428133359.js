import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button name='200'func={()=>{ myFunction(this,'red')}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myFunction(elmnt, clr){
    elmnt.style.color = clr;
    console.log("Function");
}

export default body
