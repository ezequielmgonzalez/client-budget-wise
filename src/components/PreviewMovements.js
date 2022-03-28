import React from "react";
import { Table } from "react-bootstrap";

const PreviewMovements = () => {
  const [list, setList] = React.useState([]);

  const getMovementsPreview = async () => {
    try {
      const response = await fetch("http://localhost:5000/movements/last/10");
      const jsonData = await response.json();
      console.log(jsonData);
      setList(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  // Makes a fetch request tou our REST api everytime this is component is rendered
  React.useEffect(() => {
    getMovementsPreview();
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
          </tr>
        </thead>
        <tbody>
          {list.map((list) => (
            <tr key={list.movement_id}>
              <td>${list.amount}</td>
              <td>{list.concept}</td>
              <td>{list.datem.substring(0, 10)}</td>
              <td>{list.typem === "O" ? "Outcome" : "Income"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default PreviewMovements;
