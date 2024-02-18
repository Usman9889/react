import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter >=30){
      alert("Values more than 30 are not allowed")
    }
    else{
    counter = counter + 1
    setCounter(counter)
    console.log("Added", counter);
    }
  }

  const removeValue = () => {
    if(counter <=0){
      alert("Negative values are not allowed ")
    }
    else{
    counter = counter - 1
    setCounter(counter)
    console.log("Removed", counter );
    }
  }

  return (
    <>
      <h1>Hello, This is a small counter app</h1>
      <h2>Counter Value: {counter}</h2>

      <button
       onClick={addValue}
       >Add Value</button>

      <button onClick={removeValue}>Remove Value</button>
     
    </>
  )
}

export default App
