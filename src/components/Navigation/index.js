import React from 'react';
import { Navbar, Nav, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Navigation(props) {
    const { navSelected, setNavSelected } = props;

    return (
        <div>
            <Figure>
                <Figure.Image
                    width={100}
                    height={100}
                    alt="171x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
            <Navbar className="flex-row px-2 ">
                <Navbar.Brand>Junie's Bakery</Navbar.Brand>
                <Nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about" onClick={() => setNavSelected("about")}>About Me</a>
                        </li>
                        <li className="mx-2">
                            <a href="#portfolio" onClick={() => setNavSelected("portfolio")}>Portfolio</a>
                        </li>
                        <li className={`mx-2`}>
                            <a href="#resume" onClick={() => setNavSelected("resume")}>Resume</a>
                        </li>
                        <li className={`mx-2`}>
                            <a href="#contact" onClick={() => setNavSelected("contact")}>Contact</a>
                        </li>

                    </ul>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;
