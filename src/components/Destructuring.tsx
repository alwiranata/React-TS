const data = [1 , "Aldo" , "Wiranata"]

type productType = {
    brand?: string;
    model?: string;
    type?: string;
    year?: number;
    color?: string;
};


const products = {
    brand : "Japan",
    model : "Toyoto",
    type : "car",
    year : 2025,
    color :"red"
}

type typeCar ={
    brand? : string,
    year? : number
}

const Cars1 :typeCar ={
    brand : "aldo",
    year : 2024
}

const Cars2 : typeCar = {
    brand : "aldo",
    year : 2023
}




const Destructuring = () =>{

    const mergedCars = [...[Cars1 , Cars2]]

    const myCar = (...cars : typeCar[])=>{
        return cars.map((car , index) =>
            `Car ${index + 1}: ${car.brand} year ${car.year}`

        ).join("|")
    }  

    const handleProduct = (product : productType) =>{
        return `My ${product.type} is a ${product.model} ${product.year}.`;       
    }

    const myProduct = ({ brand, model, type, year }: productType) => {
        return `My ${type} is a ${brand} ${model} from ${year}.`;
    }
    

    const [id , firstName, lastName] = data
    return(
        <>
            <div>
                <p key= {id}>FullName :  {firstName}  {lastName}</p>
                <p>Product = {handleProduct(products)}</p>
                <p>Product ={myProduct(products)}</p>
                <p>{myCar(...mergedCars)}</p>
            </div>
        </>
    )
}
export default Destructuring