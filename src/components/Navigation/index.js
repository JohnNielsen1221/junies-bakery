import React from 'react';
import { Navbar, Nav, Figure } from "react-bootstrap";
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
            <Navbar className="flex-row px-2 ">
                <Navbar.Brand>Junie's Bakery</Navbar.Brand>
                <Nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about" onClick={() => setNavSelected("about")}>About Me</a>
                        </li>
                        <li className="mx-2">
                            <a href="#menu" onClick={() => setNavSelected("menu")}>Weekly Menu</a>
                        </li>
                        <li className={`mx-2`}>
                            <a href="#custom" onClick={() => setNavSelected("custom")}>Custom Orders</a>
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
