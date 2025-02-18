import { useState } from "react"



const Form = () => {
    const [fullName, setFullaName] = useState("")

    const [inputs, setInputs] = useState<{ username?: string; age?: string }>({});

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs((prevValues) => ({ ...prevValues, [name]: value }));

    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert(JSON.stringify(inputs))
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Name</label>
                    <input
                     type="text"
                     name="username"
                     value={inputs.username || ""}
                     onChange={handleChange}
                    />
                     <label htmlFor="age">Age</label>
                    <input
                     type="number"
                     name="age"
                     value={inputs.age || ""}
                     onChange={handleChange}
                    />
                    <button type="submit">Submit</button>

                </form>
            </div>
            <div style={{
                margin: "20px",
                position: "relative",
                width: "100px",
                gap: "10px",
                maxWidth: "100px"
            }}>
                <label htmlFor="fullName">Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName || ""}
                    onChange={(e) => { setFullaName(e.target.value) }}
                />
                <p> {fullName}</p>
            </div>
        </>
    )

}

export default Form