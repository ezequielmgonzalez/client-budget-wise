import React from "react";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";

function EditMovement({ list }) {
  const [show, setShow] = React.useState(false);
  console.log(list);
  const [amount, setAmount] = React.useState(list.amount);
  const [concept, setConcept] = React.useState(list.concept);
  const [typeM, setTypeM] = React.useState(list.typem);
  const [dateM, setDateM] = React.useState(list.datem.substring(0, 10));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmitForm = async (e) => {
    // Handle the form submitted

    // Prevent from refresh
    e.preventDefault();
    try {
      const body = { amount, concept, typeM, dateM };
      const response = await fetch(
        `http://localhost:5000/movements/${list.movement_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      //  Once the response has been sent, itś going to refresh and show the changes
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit movement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitForm}>
            <Form.Label>Amount</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                aria-label="Amount (to the nearest dollar)"
              />
            </InputGroup>

            <Form.Label>Concept</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                value={concept}
                aria-describedby="basic-addon1"
                onChange={(e) => setConcept(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Form.Label>Type of Operation</Form.Label>
            <div
              key={`inline-radio`}
              className="mb-3"
              value={typeM}
              onChange={(e) => setTypeM(e.target.value)}
            >
              <Form.Check
                inline
                disabled
                label="Income"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                value="I"
                checked={typeM === "I" ? true : false}
              />
              <Form.Check
                inline
                disabled
                label="Outcome"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
                value="O"
                checked={typeM === "O" ? true : false}
              />
            </div>
            <p>{dateM}</p>

            <Form.Label>Date</Form.Label>
            <FormControl
              className="mb-3"
              type="date"
              value={dateM}
              onChange={(e) => setDateM(e.target.value)}
            ></FormControl>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="mb-3" variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// import "../style.css"

// const EditMovement = props => {
//     const [amount, setAmount] = React.useState(props.movement.amount)
//     const [concept, setConcept] = React.useState(props.movement.concept)
//     const [typeM, setTypeM] = React.useState(props.movement.typeM)
//     const [dateM, setDateM] = React.useState(props.movement.dateM)

//     const onSubmitForm = async e => {
//         // Handle the form submitted

//         // Prevent from refresh
//         e.preventDefault()
//         try {
//           const body = { amount, concept, typeM, dateM }
//           const response = await fetch(`http://localhost:5000/movements/${props.movement.movement_id}`, {
//               method: "PUT",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(body)
//           })
//         //  Once the response has been sent, itś going to refresh and show the changes
//           window.location = "/"
//         } catch (err) {
//             console.error(err.message)
//         }
//     }

//     return (
//         <div className="popup-box">
//             <div className="box">
//                 <span className="close-icon" onClick={props.handleClose}>x</span>
//                 {/* {props.content} */}
//                 <form onSubmit={onSubmitForm}>
//                     <label>
//                         Amount:
//                         <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
//                     </label>
//                     <label>
//                         Concept:
//                         <input type="text" value={concept} onChange={e => setConcept(e.target.value)} />
//                     </label>
//                     <label>
//                         Type of movement:
//                         <select value={typeM} disabled >
//                             <option value="I">Income</option>
//                             <option value="O">Outcome</option>
//                         </select>
//                     </label>
//                     <label>
//                         Date:
//                         <input type="date" value={dateM} onChange={e => setDateM(e.target.value)} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         </div>
//     )
// }

export default EditMovement;
