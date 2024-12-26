import {Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "800",
  };

  //   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary fixed   "
        style={{
          backgroundColor: "rgba(21, 21, 21, 0.50)",
          position: "absolute",
          opacity: 1,
          border: 0,
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100%",
        }}
      >
        <Navbar.Brand
          href="#home"
          style={{ color: "#ffff", fontSize: "2rem", fontWeight: 900 }}
          className=" shadow text-wrap  px-3"
        >
          BISTRO BOSS{" "}
          <span style={{ display: "block", fontSize: "24px", fontWeight: 700 }}>
            Resturant
          </span>
        </Navbar.Brand>

        <Navbar.Toggle className="navbar-toggler-icon" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-white">
            <Link to ="/"><Nav.Link to="/" style={navStyle} href="#home">
              Home
            </Nav.Link></Link>
            <Nav.Link style={navStyle} href="#features">
              Contact Us
            </Nav.Link>
            <Nav.Link style={navStyle} href="#pricing">
              Dashboard
            </Nav.Link>
           <Link to ="/menu"> <Nav.Link style={navStyle} href="#menu">
              Our Menu
            </Nav.Link></Link>
           <Link to ="/order"> <Nav.Link style={navStyle} href="#order">
              Our Shop
            </Nav.Link></Link>
            <Nav.Link style={navStyle} href="#pricing">
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

{
  /* */
}
