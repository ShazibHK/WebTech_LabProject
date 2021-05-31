import React from 'react';

import  './style.css';

import tech from './tech.png';

function Technology(){
    return(
                <section className="technology">
                    <div className="contentBx">
                        <h2 className="heading">We use cutting Edge Business Tools</h2>
                        <p className="text">
                            We use the latest tools in business word to carry our tasks out faster
                            and in a very efficient manner. This also helps us to get various insights
                            about marketing trends and strategies.

                        </p>
                    </div>
                    <div className="imgBx">
                        <img src={tech} alt="tech"/>
                    </div>
                </section>
        );
}

export default Technology;