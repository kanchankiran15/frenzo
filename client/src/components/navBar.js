import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/style.css";

const NavBar = (props) => {
  let userName;
  if (props.userData) {
    userName = props.userData.firstName + " " + props.userData.lastName;
  }
  return (
    <div>
      <Navbar expand="sm" className="mb-5 daryCyan">
        <NavbarBrand href="/" style={{ color: "seashell" }}>
          <strong className="h4 w2"> f</strong>renzo
        </NavbarBrand>
        <NavbarToggler />
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={{ color: "seashell" }}>
              {userName}
            </DropdownToggle>
            <DropdownMenu right className="ddlStyle">
              <DropdownItem style={{ color: "seashell" }}>
                <Link to="/profile" style={{ color: "seashell" }}>
                  My Profile
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/login" style={{ color: "seashell" }}>
                  Logout
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <NavItem>
            <Link to="/login" >
              {userName}
            </Link>
          </NavItem> */}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
