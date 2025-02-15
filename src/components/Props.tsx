import React from "react"

interface typeProps {
    id : number,
    fullName : string
}


const GetProps= ({id, fullName} : typeProps) =>{
    return (
        <h1 key={id}>My Name is :{fullName}</h1>
    )
}

interface typeDatas {
    id : number ,
    profile : string
}

const datas : typeDatas[] = [
    {id : 1,  profile : "PM"},
    {id : 2,  profile : "Senior Dev"}
]

const PassDatas :React.FC<typeDatas> = ({id , profile} ) =>{
    return(
        <>
          <div key = {id}> Hello {profile}</div>
        </>
    )
}

const GetDatas  = () =>{
    return(
        <>
        {datas.map((data) => (
            <PassDatas id={data.id} profile={data.profile}/>
        ))}
        </>
    )
}



export {GetProps, GetDatas}


