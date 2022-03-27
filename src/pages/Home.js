import React from "react";
import { Link } from "react-router-dom";
import InputMovement from "../components/InputMovement";
import ListMovements from "../components/ListMovements";
import { Button, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <div className="App">
        <h1>BudgetWise Home</h1>
        <Button variant="primary">Primary</Button>
        <InputMovement />
        <ListMovements />
        {/* Link to List.js */}
        <Link to={"./list"}>
          <button variant="raised">My List</button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
