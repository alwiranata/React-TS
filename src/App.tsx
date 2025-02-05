import { useState } from "react"
import Class from "./class/Class"
import Arrow from "./components/Arrow"
import Map from "./components/Map"
import Destructuring from "./components/Destructuring"

function App() {
  const [hello, setHello] = useState("")

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
      </div>
    </>
  )
}

export default App
