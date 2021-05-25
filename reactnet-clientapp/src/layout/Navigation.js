import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg container-fluid"
        style={{ backgroundColor: "#47b8b8", color: "#fff" }}
      >
        <NavbarBrand href="/" className="text-light">
          ReactNET
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="text-light" />
        <Collapse className="text-light" isOpen={isOpen} navbar>
          <Nav className="mr-auto text-light" navbar>
            <NavItem>
              <Link to="/components/" className="nav-link text-light active">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/customer" className="nav-link text-light">
                Customer
              </Link>
              {/* <NavLink href="#">Customer</NavLink> */}
            </NavItem>
            <NavItem>
              <Link to="/food" className="nav-link text-light">
                Food
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/order" className="nav-link text-light">
                Order
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
