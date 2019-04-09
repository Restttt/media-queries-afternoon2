import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './Services.css';

class Services extends Component {
    render() {
        return(
            <div className="section-parent-container">
                <div className="section-title">
                    <h1>SERVICES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="services-3-pictures">
                    <div className="services-commerce">
                        <div className="services-logo">
                            <FontAwesome className="fas fa-shopping-cart" />
                        </div>
                        <h2>E-Commerce</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                    <div className="services-commerce">
                        <div className="services-logo">
                        <FontAwesome className="fas fa-laptop" />
                        </div>
                        <h2>Responsive Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                    <div className="services-commerce">
                        <div className="services-logo">
                            <FontAwesome className="fas fa-lock" />
                        </div>
                        <h2>Web Security</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>

            </div>
        );
    };
};

export default Services;