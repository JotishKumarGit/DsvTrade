import React from 'react';
import './Common.css';
import background from '../assets/god-statue.webp';
import icon from '../assets/img_6.jpeg';

function BackImage() {
    return (
        <div className="container-fluid px-0">
             <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
               
                    <div className="overlay-card container">
                        <div className="card shadow-lg p-4 custom-card">
                            <div className="text-center mb-3">
                                <img src={icon} alt="False Ceiling Icon" className="icon-img mb-3" />
                                <h3 className="fw-bold">Smart Surface Solutions</h3>
                                <p className="text-muted">Revolutionizing Modern Interiors with Intelligent Flooring & Ceilings</p>
                            </div>
                            <p className="description text-secondary">
                                From cutting-edge vinyl flooring to precision-engineered false ceilings, our smart surface solutions
                                bring both elegance and durability to your spaces. Designed for high performance and aesthetic appeal,
                                our range — including carpets, wooden flooring, and modular false floors — supports sustainable and
                                energy-efficient construction.
                            </p>
                            <div className="text-center mt-3">
                                <button className="btn btn-primary animated-btn">Explore Our Innovations</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackImage;