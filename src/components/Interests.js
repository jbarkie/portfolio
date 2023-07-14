import React from 'react';

export default function Interests() {
    return (
        <div>
        <section className="resume-section" id="interests">
            <main>
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>When I'm not working or studying, I have several hobbies that keep me very busy. 
                        I play guitar, bass, drums, and piano, and enjoy listening to all kinds of music. I have a relatively large collection of vinyl records. Currently, my favorite record to spin is Mud Slide Slim and the Blue Horizon by James Taylor. I love to be outside as much as possible, whether I am hiking, biking, playing basketball, or just catching some sunshine! </p>
                    <p className="mb-0"></p>
                </div>
            </main>
            <aside>
                    <img src="images/mountains.jpg" alt="Rocky Mountain National Park in Estes Park, CO, a regular hiking spot of mine." className='img-fluid'/>
            </aside>
        </section>
        <hr className="m-0" />
        </div>
    );
};