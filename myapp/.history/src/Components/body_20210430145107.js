import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button id = '200' name='200'func={()=>{ myFunction()}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myFunction(){
    var x = document.getElementById('200').name;
    console.log)_
    x.style.backgroundColor="red";
}


export default body
