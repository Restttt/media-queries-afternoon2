import React, {Component} from 'react';

import './Portfolio.css';

import photo1 from '../../img/01-thumbnail.jpg';
import photo2 from '../../img/02-thumbnail.jpg';
import photo3 from '../../img/03-thumbnail.jpg';
import photo4 from '../../img/04-thumbnail.jpg';
import photo5 from '../../img/05-thumbnail.jpg';
import photo6 from '../../img/06-thumbnail.jpg';

class Portfolio extends Component {
    render() {
        return(
            <div className=".section-parent-container portfolio-container">
                <div className="section-title">
                    <h1>PORTFOLIO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="portfolio-display-container">

                    <div className="porfolio-box">
                        <img className="porfolio-image" src={photo1} alt="shirts" />
                        <h2>Threads</h2>
                        <p>Illustration</p>
                    </div>

                    <div className="porfolio-box">
                        <img className="porfolio-image" src={photo2} alt="shirts" />
                        <h2>Explore</h2>
                        <p>Graphic Design</p>
                    </div>

                    <div className="porfolio-box">
                        <img className="porfolio-image" src={photo3} alt="shirts" />
                        <h2>Finish</h2>
                        <p>Identity</p>
                    </div>

                    <div className="porfolio-box">
                        <img className="porfolio-image" src={photo4} alt="shirts" />
                        <h2>Lines</h2>
                        <p>Branding</p>
                    </div>

                    <div className="porfolio-box">
                        <img className="porfolio-image" src={photo5} alt="shirts" />
                        <h2>Southwest</h2>
                        <p>Website Design</p>
                    </div>

                    <div className="porfolio-box">
                        <img className="porfolio-image" src={photo6} alt="shirts" />
                        <h2>Window</h2>
                        <p>Photography</p>
                    </div>
                </div>

            </div>
        );
    };
};

export default Portfolio