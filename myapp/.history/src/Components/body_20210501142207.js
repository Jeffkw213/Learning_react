import Button from './button'
const body = ({text}) => {
    return (
        <div>
            <body className ='body'>{text}</body>
                <Button name='100' func={()=>{myfunction()}}/>
                <Button color = 'green' name='Date' func={()=>{getDate()}}/>
                <p id='text'></p>
        </div>
    )
}

body.defaultProps = {
    text: "hello Cheif",
}

function myfunction(){
    
}

function getDate(){
    document.getElementById('text').innerHTML = Date();
}

export default body
