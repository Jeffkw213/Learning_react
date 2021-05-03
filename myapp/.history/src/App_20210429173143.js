import Header from './Components/header'
import Body from './Components/body'
import Button from './Components/button'
function App() {
  // const name = 'jeff'
  return (
    // <div className='container'>
    //  <h1> Starting of React </h1>
    //  <h2> Hello {name} </h2>
    // </div>
    <div className='container'> 
      <Header />
      <Body />
      <Button name= 'hello' />
    </div>
  );
}

export default App;
