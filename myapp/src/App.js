import Header from './Components/header'
import Body from './Components/body'
function App() {
  // const name = 'jeff'
  var onAdd = true;
  return (
    <div className='container'> 
      <Header onAdd={onAdd}/>
      <Body />
    </div>
  );
}

export default App;
