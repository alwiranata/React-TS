
const data = [
    {id: 1 , firstName : "Aldo", lastName : "Wiranata" }
]

const Map = () =>{
    return (
        <>
        <div>
        {data.map((item ) =>{
          return  <p key={item.id}>Full Name = {item.firstName} {item.lastName}</p>
        })}
        </div>
        </>
    )
}
export default Map