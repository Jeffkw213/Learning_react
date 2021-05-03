import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <p className ='body'>{text}</p>
            <div id = ''>
                <Button name='100' func={()=>{myfunction()}}/>
                <Button color = 'green' name='Date' func={()=>{getDate()}}/>
            </div>
            <p id='text'></p>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(){
    document.getElementById('text').innerHTML = "Hello";
}

function getDate(){
    document.getElementById('text').innerHTML = Date();
}

export default body
