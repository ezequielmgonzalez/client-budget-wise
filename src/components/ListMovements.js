import React from "react";
import { Table, Button } from "react-bootstrap";
import EditMovement from "./EditMovement";

const ListMovements = () => {
  const [list, setList] = React.useState([]);

  const getMovements = async () => {
    try {
      const response = await fetch("http://localhost:5000/movements");
      const jsonData = await response.json();
      setList(jsonData);
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
              <td>{list.datem.substring(0, 10)}</td>
              <td>{list.typem === "O" ? "Outcome" : "Income"}</td>
              <td>
                <EditMovement list={list} />
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
