interface getDataProps {
    id :number
    name : string
}

const GetData = ({id, name} : getDataProps) =>{
    return (
        <div key={id}>I am  {name}</div>
    )
}

const datas  = [
    {id : 1 , name : "Toyota"},
    {id : 2 , name : "Honda"},
    {id : 3, name :"BMW"}
]

const Lists  = () =>{
    return (
        <>
        
        {datas.map((e) => <GetData id={e.id} name= {e.name}/>)}
        </>
    )
}

export default Lists