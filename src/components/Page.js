import React from 'react';
import About from './About'
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';

export default function Page() {
    return (
        <div class="container-fluid p-0">
            <About></About>
            <Experience></Experience>
            <Education></Education>
            <Skills></Skills>
            <Interests></Interests>
        </div>
    );
};