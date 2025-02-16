
const shoot = () =>{
    alert("goal")
}

interface passToo{
    name : string
    event : React.MouseEvent<HTMLButtonElement>
}

const passTo = ({name ,event} : passToo) =>{
    alert("Pass To" + name)
    console.log(event)
}

const Football = () =>{

    return(
        <>
        <button onClick={(event) => passTo({name : "Ronaldo" ,event})}>UCL</button>
        <button onClick={shoot}>Shoot</button>
        </>
    )
}

export default Football