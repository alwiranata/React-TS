import { useState } from "react"
import Class from "./class/Class"
import Arrow from "./components/Arrow"
import Map from "./components/Map"
import Destructuring from "./components/Destructuring"
import { Modules, name, profile } from "./components/Modules"
import TernaryOperator from "./components/TernaryOperator"
import Component from "./components/Components"
import ClassComponent from "./components/Class"
import {GetProps, GetDatas}  from "./components/Props"
import Football from "./components/Event"
import {Condition, Cars} from "./components/Condtion"
import Lists from "./components/Lists"
import Form from "./components/Form"
import Router from "./routes/Router"
function App() {
  const [hello, setHello] = useState("")
  const card = {name , profile} 
  return (
    <>
      <div>
        {/* <h1>Hello Wolrd</h1>
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
        <p><Component/></p>
        <p><ClassComponent name="toyota"/></p>
        <p><GetProps id ={1} fullName ="Aldo Wiranata" /></p>
        <p><GetProps id ={2} fullName ="Aldo Wiranata2" /></p>
        <p><GetDatas /></p>
        <p><Football/></p>
        <p><Condition/></p>
        <p><Cars name ={["Toyota" , "Avanza"]}/></p>
        <p><Cars name = "Mercy"/></p>
        <p><Lists/></p>
        <p><Form/></p> */}
        <p><Router/></p>
      </div>
    </>
  )
}

export default App
