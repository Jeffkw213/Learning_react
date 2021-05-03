import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button className='hello' name='200'func={()=>{ myFunction()}}/>
            </body>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myFunction(){
    var x = document.getElementsByClassName('hello').name;
    console.log(x);
    
}


export default body
