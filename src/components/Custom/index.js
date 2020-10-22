import React from 'react'

function Resume() {
    return (
        <section>
            <h1 className="resume-title">Taking care of business and working overtime. Workout...</h1>
            <div className="resume-page">
                <h4>Download my <a className='resume-link' href="https://github.com/JohnNielsen1221/react-portfolio/blob/master/src/assets/JohnHayesNielsenResume.pdf">resume</a></h4>
                <br></br>
                <div className='proficiencies'>
                    <h3>Front-End Proficiencies</h3>
                    <p>HTML<br></br>CSS (Bootstrap, Materialize, custom)<br></br> JavaScript<br></br> jQuery<br></br> React<br></br> IndexedDB</p>
                </div>
                <br></br>
                <div>
                    <h3>Back-End Proficiencies</h3>
                    <p>Node<br></br> Express<br></br> SQL (sqlite, mySQL)<br></br> Sequelize<br></br> NoSQL (MongoDB, Mongoose)<br></br> API's</p>
                </div>
            </div>
        </section>
    )
}

export default Resume
