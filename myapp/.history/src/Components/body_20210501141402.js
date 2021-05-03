import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}
                <Button name='100' func={()=>{console.log("HELLO")}}/>
                <Button color = 'green' name='200' func={()=>{myfunction()}}/>
                <p id='text'></p>
            
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(){
    document.getElementById('text').innerHTML = Date();
}

export default body
