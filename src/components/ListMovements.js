import React from "react";
import { Table, Button } from "react-bootstrap";
import EditMovement from "./EditMovement";

const ListMovements = () => {
  const [list, setList] = React.useState([]);
  // const [popUp, setPopUp] = React.useState(false)

  // const togglePopUp = () => {
  //     setPopUp(!popUp)
  // }

  const getMovements = async () => {
    try {
      const response = await fetch("http://localhost:5000/movements");
      const jsonData = await response.json();
      setList(jsonData.slice(0, 10));
      console.log(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  const deleteMovement = async (id) => {
    try {
      const deleteMovement = await fetch(
        `http://localhost:5000/movements/${id}`,
        {
          method: "DELETE",
        }
      );
      setList(list.filter((list) => list.movement_id !== id));
    } catch (e) {
      console.error(e.message);
    }
  };

  // Makes a fetch request tou our REST api everytime this is component is rendered
  React.useEffect(() => {
    getMovements();
  }, []);

  return (
    <React.Fragment>
      {" "}
      {/* <table>
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Concept</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                
                {list.map(list => (
                    <tr key={list.movement_id}>
                        <td>{list.amount}</td>
                        <td>{list.concept}</td>
                        <td>{list.dateM}</td>
                        <td>{list.typeM}</td>
                        <td>
                            <div>
                                <input
                                type="button"
                                value="Click to Open Popup"
                                onClick={togglePopUp}
                                />
                                {popUp && <EditMovement
                                    movement={list}
                                    handleClose={togglePopUp}
                                />}
                            </div>ct.useState(list.datem)

                            <button
                            onClick={() => deleteMovement(list.movement_id)}
                            >
                            Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Concept</th>
            <th>Date</th>
            <th>Type</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((list) => (
            <tr key={list.movement_id}>
              <td>${list.amount}</td>
              <td>{list.concept}</td>
              <td>{list.datem}</td>
              <td>{list.typem === "O" ? "Outcome" : "Income"}</td>
              <td>
                <EditMovement list={list} />
                {/* <EditMovement /> */}
                {/* <div>
                                    <input
                                    type="button"
                                    value="Click to Open Popup"
                                    onClick={togglePopUp}
                                    />
                                    {popUp && <EditMovement
                                        movement={list}
                                        handleClose={togglePopUp}
                                    />}
                                </div> */}
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteMovement(list.movement_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ListMovements;
