import React from "react";
import { Nav } from "react-bootstrap";

function LittleNav() {
  return (
    <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/movements">Movements</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default LittleNav;
