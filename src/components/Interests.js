import React from 'react';
import badlands from '../images/badlands.jpg'

export default function Interests() {
    return (
        <div>
        <section className="resume-section" id="interests">
            <main>
                <div className="resume-section-content">
                    <h2 className="mb-3">Interests</h2>
                    <p>When I'm not working or studying, you might find me playing guitar, listening to  music, or outside catching some sunshine. I am an avid collector of vinyl records, my favorite lately being <em>Mud Slide Slim and the Blue Horizon</em> by James Taylor. I love to be outside as much as possible, whether I am hiking, biking, snowboarding, or reading a book in my hammock!</p>
                    <p className="mb-0"></p>
                </div>
            </main>
            <aside>
                    <img src={badlands.src} alt="Badlands near my hometown in North Dakota." className='img-fluid'/>
            </aside>
        </section>
        <hr className="m-0" />
        </div>
    );
};