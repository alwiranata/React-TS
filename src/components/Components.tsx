import React from "react";

class Car extends React.Component{
    render() {
        return  "My Name iS :"
    }
}

interface Datas {
    id : number
    Name : String
}


const datas : Datas[]  = [
    {id : 1 , Name : "Aldo"},
    {id:  2 , Name : " Wiranata" }
]

const Component = () =>{
    return (
        <>
       
        {datas.map(( data ) =>
          
           <div key={data.id}><Car/>{data.Name}</div> 
        )}
        </>
    )
}

export default Component
