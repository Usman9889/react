import { useState } from 'react'

import './App.css'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"usman",
    age:23
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className=" bg-green-400 text-3xl font-bold p-4 rounded-xl mb-4">
      Hello, this is usman. A mern stack developer.
    </h1>
    <Cards username = "Mohd" btnText = "click me" />
    <Cards username = "Usman" btnText = "visit me" />
    </>
  )
}

export default App
