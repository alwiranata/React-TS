import { useState } from "react"
import Class from "./class/Class"
import Arrow from "./components/Arrow"
import Map from "./components/Map"
import Destructuring from "./components/Destructuring"
import { Modules, name, profile } from "./components/Modules"
import TernaryOperator from "./components/TernaryOperator"

function App() {
  const [hello, setHello] = useState("")
  const card = {name , profile} 
  return (
    <>
      <div>
        <h1>Hello Wolrd</h1>
        <p>{hello}</p>
        <input
          type="text"
          placeholder="Masukkan text..."
          onChange={(e) => { setHello(e.target.value) }}
        />
        <p><Class/></p>
        <p><Arrow/></p>
        <p><Map/></p>
        <p><Destructuring/></p>
        <p>My name = {card.name}</p>
        <p>My profile = {card.profile}</p>
        <p><Modules/></p>
        <p><TernaryOperator/></p>
      </div>
    </>
  )
}

export default App
