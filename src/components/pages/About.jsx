//about page in header
import React from 'react'
import Lorem from 'react-lorem-component'

import 'styles/main.css';

const About = () => (
    <div>
        <h2>About</h2>
        <br/>
        <Lorem mode="list" count="3" className="lorem"/>
    </div>
)

export default About