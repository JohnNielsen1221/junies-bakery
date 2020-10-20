import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Nav(props) {
    const { navSelected, setNavSelected } = props;

    return (
        <Navbar className="flex-row px-2 ">
            <h2>Junie's Bakery</h2>
            <nav>
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
            </nav>
        </Navbar>
    );
}

export default Nav;
