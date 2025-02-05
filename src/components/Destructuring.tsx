const data = [1 , "Aldo" , "Wiranata"]

type productType = {
    brand?: string;
    model?: string;
    type?: string;
    year?: number;
    color?: string;
};


const product = {
    brand : "Japan",
    model : "Toyoto",
    type : "car",
    year : 2025,
    color :"red"
}





const Destructuring = () =>{
    

    const handleProduct = (product : productType) =>{
        return `My ${product.type} is a ${product.model} ${product.year}.`;       
    }

    function myProduct({ brand, model, type, year }: productType) {
        return `My ${type} is a ${brand} ${model} from ${year}.`;
    }
    

    const [id , firstName, lastName] = data
    return(
        <>
            <div>
                <p key= {id}>FullName :  {firstName}  {lastName}</p>
                <p>Product = {handleProduct(product)}</p>
                <p>Product ={myProduct(product)}</p>
            </div>
        </>
    )
}
export default Destructuring