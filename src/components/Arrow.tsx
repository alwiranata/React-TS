class Header {
    page : string
    color : string
    constructor(pages: string  ,colors : string){
        this.page = pages
        this.color  = colors
    }

    home(){
        if(this.page === "Home"){
            return "It is " + this.page + " Page"
        }
    }

    red(){
        if(this.color === "red"){
            return  this.color
        }
    }
}

const Arrow= () =>{

    const header = new Header("Home" , "red")

    return(
        <>
            <div style={{color :header.red()}}>
               {header.home()}
            </div>
        </>
    )
}
export default Arrow 