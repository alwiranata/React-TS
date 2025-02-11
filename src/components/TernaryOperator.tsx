const TernaryOperator = () =>{
    const Name = "Aldo wiranata"
    const NIM = 2455201036

   const message =  Name && NIM? "Login Success" : "Login Failed"
    return(
        <>
         <p>Message = {message}</p>
        </>
    )
}

export default TernaryOperator