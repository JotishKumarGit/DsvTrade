import React from 'react';
import './Common.css';
import img_1 from '../assets/img_2.jpeg';


const About = () => {



    return (
        <section className="about-us-section py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Image */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img src={img_1}
                            alt="About Us" className="img-fluid rounded shadow" />
                    </div>

                    {/* Right Column - Text */}
                    <div className="col-md-6">
                        <h2 className="mb-4 text-primary">About Us</h2>
                        <p className="lead">
                            We are a trusted name in the industry as a leading <strong>Manufacturer, Exporter, and Supplier</strong>
                            of high-quality products tailored to meet global standards.
                        </p>
                        <p>
                            With years of experience, state-of-the-art infrastructure, and a commitment to excellence,
                            we deliver innovative solutions and exceptional service across diverse industries.
                        </p>
                        <ul className="list-unstyled mt-3">
                            <li>✅ High-Quality Manufacturing Standards</li>
                            <li>✅ Timely Global Export Services</li>
                            <li>✅ Customer-Centric Approach</li>
                            <li>✅ Competitive Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;