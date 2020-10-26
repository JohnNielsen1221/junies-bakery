import React from 'react';



function Menu() {

    return (
        <>
        <div>
            <h1>Weekly Menu</h1>
            <h3>Menu Item 1</h3>
            <p>Description of Item</p>
            <h3>Menu Item 2</h3>
            <p>Description of Item</p>
            <h3>Menu Item 3</h3>
            <p>Description of Item</p>
            <h3>Menu Item 4</h3>
            <p>Description of Item</p>
        </div>
        <div>
            <p>How many ___ would you like?</p>
            <input type='number'></input>
            <p>How many ___ would you like?</p>
            <input type='number'></input>
            <p>How many ___ would you like?</p>
            <input type='number'></input>
            <p>How many ___ would you like?</p>
            <input type='number'></input>
        </div>
        </>
    );
}

export default Menu;