import React, { useState } from 'react';
import './Common.css';


const faqData = [
    {
        question: 'What are the benefits of vinyl flooring?',
        answer: 'Vinyl flooring is durable, water-resistant, low-maintenance, and available in a variety of styles and colors, making it a cost-effective choice for both residential and commercial spaces.'
    },
    {
        question: 'Are carpets easy to maintain?',
        answer: 'Carpets require regular vacuuming and occasional deep cleaning to maintain their appearance. Stain-resistant options and proper care can significantly extend their life.'
    },
    {
        question: 'What is false flooring and where is it used?',
        answer: 'False flooring, also known as raised access flooring, is commonly used in offices, server rooms, and data centers to manage cables, wiring, and HVAC systems beneath the floor surface.'
    },
    {
        question: 'How is false ceiling beneficial for interiors?',
        answer: 'False ceilings improve aesthetics, enhance lighting effects, offer acoustic insulation, and hide wiring or ductwork. They can also contribute to better temperature regulation.'
    },
    {
        question: 'Is wooden flooring suitable for Indian climates?',
        answer: 'Yes, engineered wooden flooring is highly stable and well-suited for Indian weather conditions. It adds warmth and elegance to interiors and is available in various finishes.'
    },
    {
        question: 'Can vinyl flooring be used in wet areas like bathrooms?',
        answer: 'Yes, high-quality vinyl flooring is water-resistant and can be used in bathrooms and kitchens. Ensure professional installation for maximum durability and sealing.'
    },
    {
        question: 'Do carpets affect indoor air quality?',
        answer: 'Modern carpets are designed with low VOC materials and can actually help trap dust and allergens, improving air quality when cleaned regularly.'
    },
    {
        question: 'Is false flooring customizable for different heights?',
        answer: 'Absolutely. False flooring systems can be customized in terms of height and load-bearing capacity based on your specific infrastructure needs.'
    },
    {
        question: 'How long does it take to install a false ceiling?',
        answer: 'False ceiling installation usually takes 2–5 days depending on the area size, design complexity, and type of materials used.'
    },
    {
        question: 'How do I maintain wooden flooring?',
        answer: 'Use a soft broom or vacuum, avoid excessive water, and occasionally polish with recommended wood floor cleaners. Avoid dragging heavy furniture to prevent scratches.'
    }
];


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = index => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion faq-accordion">
                {faqData.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                onClick={() => toggleIndex(index)}
                            >
                                <i className={`me-2 fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                {item.question}
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;