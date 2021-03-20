import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Navbar expand="lg" bg="light">
            <Navbar.Brand as={Link} to="/home"><h4> Globetrotter: The City Ride Service</h4>
            <p>24/7 faithfully by your side</p>
            </Navbar.Brand>
           
           
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
                    {user.email ? (
                            user.name? <p style={{marginTop: "7px"}}>{user.name}</p> : <p style={{marginTop: "7px"}}>{user.email}</p>
                        ) : (
                    <Nav.Link as={Link} to="/login">
                            <Button variant="success">Login</Button>
                            </Nav.Link>
                             )}              
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
