import React,{useState}from 'react';
import Tweet from './tweet';

function App(){
  useState(false)
  const[isRed, setRed] = useState(false);
  const[count,setCount] = useState(0);
  const increment = () => {
    setCount(count +1);
    setRed(!isRed);

  }
  return(
    <div className = "app">
    <h1 className={isRed ? 'red':""}>Change My Color</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
    
      <Tweet name="Ms.Moana Singh"message="Chief Operations Officer"hierarchy="Reports to Director"/>
      <Tweet name="Mr.Rohan Trolls"message="Chief Finance Officer"hierarchy="Reports to Director"/>
      <Tweet name="Mr Alladin"message="Chief Executive Officer"hierarchy="Reports to Director"/>
      
    </div>
  )
}
export default App;
