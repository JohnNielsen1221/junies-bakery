import React from 'react';
import { Navbar, Nav, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navigation(props) {
    const { navSelected, setNavSelected } = props;

    return (
        <div>
            <Figure>
                <Figure.Image className='w-100'
                    alt="171x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
            <Navbar collapseOnSelect expand="lg" className="navbar-css">
                <Navbar.Brand className="title" as={Link} to="/">
                    About Junie's Bakery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                            <>
                                <Nav.Link eventKey="1" className="nav" as={Link} to="/menu">
                                    Weekly Menu
                                </Nav.Link>
                                <Nav.Link eventKey="2" className="nav" as={Link} to="/custom">
                                    Custom Order
                                </Nav.Link>
                                <Nav.Link eventKey="3" className="nav" as={Link} to="/contact">
                                    Contact
                                </Nav.Link>
                                </>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
