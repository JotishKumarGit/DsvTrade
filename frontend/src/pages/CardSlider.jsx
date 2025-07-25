// CardSlider.js
import React from 'react';
import './Common.css';
import img_1 from '../assets/img_1.jpeg';
import img_2 from '../assets/img_2.jpeg';
import img_3 from '../assets/img_3.jpeg';


const cards = [
    {
        id: 1,
        img: img_1,
        title: "Fresh Tender Coconut",
        description: "Naturally refreshing and packed with electrolytes — ideal for hydration and boosting immunity.",
    },
    {
        id: 2,
        img: img_2,
        title: "Divine God Statue",
        description: "Beautifully crafted idol perfect for home temples, spiritual corners, or as a sacred gift.",
    },
    {
        id: 3,
        img: img_3,
        title: "Traditional Clay Pot",
        description: "Eco-friendly, handmade clay pot ideal for storing water and enhancing your kitchen's traditional charm.",
    },
];


const CardSlider = () => {
    return (
        <div className="card-slider container-fluid">
            <div className="d-flex overflow-auto flex-row gap-3 px-3">
                {cards.map(card => (
                    <div className="card flex-shrink-0" key={card.id} style={{ width: "18rem" }}>
                        <img src={card.img} alt="" height={'200px'} />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
