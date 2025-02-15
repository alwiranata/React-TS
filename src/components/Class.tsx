import React from "react";

interface CarProps {
    name: string
}

interface classComponents {
    name: string
}


interface toyState {
    brand: string
    model: string
    years: number
}

interface toyProps{
    brand: string
    model: string
    years: number
}

class Toy extends React.Component<toyState , toyProps> {
    constructor(props : toyState) {
        super(props)
        this.state = {
            brand: props.brand,
            model: props.model,
            years: props.years
        }
    }

    changeModel = () => {
        this.setState({ model: "V1" })
    }

    render() {
        return (
            <>
            <h1>It's {this.state.brand}</h1>
            <p>Model : {this.state.model}</p>
            <p>Year : {this.state.years}</p>
            <button onClick={this.changeModel}>Change Model</button>
            </>
        )

    }
}

class Car extends React.Component<CarProps> {
    render() {
        return <h2>I' have a car = {this.props.name}</h2>
    }
}

const classComponent: React.FC<classComponents> = (props) => {
    return (
        <>
            <Car name={props.name} />
            <Toy brand="Boneka" model = "V2" years={2006}/>
        </>
    )
}

export default classComponent