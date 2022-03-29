import React from "react";
import { Nav } from "react-bootstrap";

const activeStyle = {
  color: "rgb(187, 46, 31)",
};

function LittleNav() {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/" eventKey="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/movements">Movements</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default LittleNav;
