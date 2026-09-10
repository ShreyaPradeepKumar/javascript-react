import './App.css'
import { useState } from 'react';

function Greeting(prop){
  return <h2>Hello World {prop.name} you are {prop.age} years old</h2>
}

function App() {
  const [showGreeting, setShowGreeting] = useState(false);


  const name = getName();
  const age = 22; 

  function greet(){
    if(showGreeting){    
      setShowGreeting(false);
    } else {
      setShowGreeting(true);
    }
  }

  return (
   <div>
    <button onClick={greet}>clickme</button>
    {showGreeting && <Greeting name={name} age={age}/>}
   </div>
  )
}

function getName(){
  return "Shreya";
}

export default App;