import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-links">
                    <Nav.Link as={Link} to="/home" className="nav-link">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/destination" className="nav-link">
                        Destination
                    </Nav.Link>
                    <Nav.Link as={Link} to="/blog" className="nav-link">
                        Blog
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="nav-link-last">
                        Contact
                    </Nav.Link>
                    <Nav.Link  as={Link} to="/login">
                        <Button variant="success">Login</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
