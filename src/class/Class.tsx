class Car {
    brand: string

    constructor(name: string) {
        this.brand = name
    }

    present() {
        return "I Have a " + this.brand
    }
}

class Model extends Car {
    model: string
    constructor(name: string, mod: string) {
        super(name)
        this.model = mod
    }

    show() {
        return this.present() + " it is a " + this.model
    }
}

const Class = () => {

    const myCar = new Model("Toyota", "2025")

    return (
        <>
            <p>{myCar.show()}</p>
        </>
    )
}

export default Class