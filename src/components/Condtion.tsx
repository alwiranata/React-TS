interface scored {
    name : string 
    goal? : boolean
}

const Goal  = ({name , goal}: scored) =>{

    const isGoal = !!goal

    return(
         isGoal ? `Goal from${name}` : `Missed Goal from ${name}`
    ) 
}

const Condition = () =>{
    return (
        <Goal name = "Ronaldo" goal={true} />
    )
}

interface cars {
    name : string  | string[]
}

const Cars = ({name} :cars) =>{
    const getCars = Array.isArray(name) ? name.join(", ") : name
    return (
        <>
         {getCars && getCars.length  > 0 && 
            <h1>My Cars = {getCars}</h1>
         }
        </>
       
    )
}

export { Condition, Cars}