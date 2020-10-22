import React from 'react';


function Wrapper(props) {
    return <div className="wrapper space-between">{props.children}</div>;
}

function Portfolio() {

    return (
        <div>
            <div>
                <h1 className="text-center portfolio-title">It's been a hard days night...</h1>
            </div>

            <Wrapper >
                
            </Wrapper>
        </div>
    );
}

export default Portfolio;