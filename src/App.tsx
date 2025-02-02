import { useState } from "react"
import Class from "./class/Class"
import Arrow from "./components/Arrow"

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
      </div>
    </>
  )
}

export default App
