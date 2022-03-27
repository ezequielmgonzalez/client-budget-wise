import React from "react"
import { Form, Button, InputGroup, FormControl } from "react-bootstrap"


const InputMovement = () => {
    const [amount, setAmount] = React.useState(0)
    const [concept, setConcept] = React.useState("")
    const [typeM, setTypeM] = React.useState("I")
    const [dateM, setDateM] = React.useState("")

    const onSubmitForm = async e => {
        // Handle the form submitted

        // Prevent from refresh
        e.preventDefault()
        try {
          const body = { amount, concept, typeM, dateM }
          const response = await fetch("http://localhost:5000/movements", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          })
        //  Once the response has been sent, itś going to refresh and show the changes
          window.location = "/" 
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <React.Fragment>
            {/* <h1>Input Movement</h1>
            <form onSubmit={onSubmitForm}>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </label>
                <label>
                    Concept:
                    <input type="text" value={concept} onChange={e => setConcept(e.target.value)} />
                </label>
                <label>
                    Type of movement:
                    <select value={typeM} onChange={e => setTypeM(e.target.value)} >
                        <option value="I">Income</option>
                        <option value="O">Outcome</option>
                    </select>
                </label>
                <label>
                    Date:
                    <input type="date" value={dateM} onChange={e => setDateM(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form> */}

            <Form onSubmit={onSubmitForm}>
                <h1>Input Movement</h1>

                <Form.Label>Amount</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl 
                        value={amount} 
                        onChange={e => setAmount(e.target.value)} 
                        aria-label="Amount (to the nearest dollar)" 
                    />
                </InputGroup>

                <Form.Label>Concept</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl 
                        value={concept} 
                        onChange={e => setConcept(e.target.value)}
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Form.Label>Type of Operation</Form.Label>
                {/* <Form.Select aria-label="Default select example">
                    <option>Select the type of operation...</option>
                    <option value="I">Income</option>
                    <option value="O">Outcome</option>
                </Form.Select> */}
                <div key={`inline-radio`} className="mb-3" value={typeM} onChange={e => setTypeM(e.target.value)}>
                    <Form.Check
                        inline
                        label="Income"
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                        value="I"
                    />
                    <Form.Check
                        inline
                        label="Outcome"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                        value="O"
                    />
                </div>

                <Form.Label>Date</Form.Label>
                <FormControl className="mb-3" type="date" value={dateM} onChange={e => setDateM(e.target.value)}></FormControl>

                <Button className="mb-3" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </React.Fragment>
    )
}

export default InputMovement