import Header from './Components/header'
import Body from './Components/body'
function App() {
  // const name = 'jeff'
  var onAdd = true;
  return (
    // <div className='container'>
    //  <h1> Starting of React </h1>
    //  <h2> Hello {name} </h2>
    // </div>
    <div className='container'> 
      <Header onAdd={onAdd}/>
      <Body />
    </div>
  );
}

export default App;
