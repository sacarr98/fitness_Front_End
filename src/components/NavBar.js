import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/fitnesslogo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md" className={styles.NavBar} fixed="top">
      <Container>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
              >
                Sign In
              </Nav.Link>
              <Nav.Link exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signun"
              >
                Sign Up
              </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Your Progress
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Exercises
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Workouts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Login/Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;