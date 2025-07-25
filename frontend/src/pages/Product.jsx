

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Common.css';
import { ProductPreviewModal, EnquiryModal } from '../components/modal/Modal';

import img_1 from '../assets/img_1.jpeg';
import img_2 from '../assets/img_2.jpeg';
import img_3 from '../assets/img_3.jpeg';
import img_4 from '../assets/img_4.jpeg';
import img_5 from '../assets/img_5.jpeg';
import img_6 from '../assets/img_6.jpeg';
import img_7 from '../assets/img_7.jpeg';
import img_8 from '../assets/img_8.jpeg';

const productData = [
    {
        id: 1,
        title: "Premium Carpets",
        description: "Add warmth and elegance to any space with our premium carpets. Available in various textures and patterns, perfect for residential or commercial use.",
        img: img_1
    },
    {
        id: 2,
        title: "False Ceiling Solutions",
        description: "Enhance the aesthetics and acoustics of your interiors with our customizable false ceiling options, designed for modern homes and offices.",
        img: img_2
    },
    {
        id: 3,
        title: "False Flooring Systems",
        description: "Optimize your space with our modular false flooring systems, ideal for offices, data centers, and spaces requiring underfloor wiring and air circulation.",
        img: img_3
    },
    {
        id: 4,
        title: "Vinyl Flooring",
        description: "Durable, water-resistant, and stylish—our vinyl flooring is perfect for high-traffic areas. Easy to install and maintain, ideal for both homes and businesses.",
        img: img_4
    },
    {
        id: 5,
        title: "Terracotta Pots",
        description: "Authentic terracotta pots perfect for home gardens and interior decor. Handcrafted with care to bring a rustic charm to your space.",
        img: img_5
    },
    {
        id: 6,
        title: "Decorative Planters",
        description: "A wide collection of colorful and artistic planters designed to enhance your balcony or garden aesthetic.",
        img: img_6
    },
    {
        id: 7,
        title: "Artistic Masks & Wall Decor",
        description: "Handcrafted wall hangings and masks to add vibrant and cultural flair to your interior walls.",
        img: img_7
    },
    {
        id: 8,
        title: "Clay Utensils & Bowls",
        description: "Traditional clay utensils for cooking and serving, made from natural materials, promoting healthy living and sustainability.",
        img: img_8
    }
];



const Product = () => {

    const [showPreview, setShowPreview] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePreviewShow = (product) => {
        setSelectedProduct(product);
        setShowPreview(true);
    };

    const handlePreviewClose = () => {
        setShowPreview(false);
        setSelectedProduct(null);
    };

    const handleEnquiryOpen = (product = null) => {
        if (product) setSelectedProduct(product);
        setShowEnquiry(true);
    };

    const handleEnquiryClose = () => {
        setShowEnquiry(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const phone = '+917905951309';
        const text = `Product: ${selectedProduct?.title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(WaLink, "_blank");
        console.log("data is passed to WhatsApp");
    };


    return (
        <div className="container-fluid p-0 py-5" style={{ backgroundColor: '#f5f5f5' }}>
            <Container className="">
                <h4 className="text-center text-success">Sustainable Energy Solutions</h4>
                <h2 className="text-center fw-bold mb-4">
                    ONGRID, OFFGRID & Hybrid Solar Systems | Solar Pumps | Chakki | Street Lights
                </h2>
                <p className="text-center text-muted mb-5">
                    Power your home, farm, or business with our cutting-edge solar products — from grid-connected systems to standalone solutions. Go green, save energy, and lower your costs.
                </p>

                <Row className='justify-content-center'>
                    {productData.map((product) => (
                        <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
                            <Card className="product-card h-100 ">
                                <div className="image-wrapper">
                                    <img src={product.img} alt="" className="base-image" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                                    <img src={product.img} alt="" className="slide-image" style={{ width: "100%", height: "250px", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-semibold">{product.title}</Card.Title>
                                    <Button className="me-3" variant="dark" size="sm" onClick={() => handlePreviewShow(product)}>
                                        View Details</Button>
                                    <Button variant="dark" size="sm" onClick={() => handleEnquiryOpen(product)}>
                                        Enquiry
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Product Preview Modals */}
                <ProductPreviewModal
                    show={showPreview}
                    handleClose={handlePreviewClose}
                    product={selectedProduct}
                    onEnquiryClick={() => { handlePreviewClose(); handleEnquiryOpen(); }}
                />

                {/* Enquery modal */}
                <EnquiryModal
                    show={showEnquiry}
                    handleClose={handleEnquiryClose}
                    handleSubmit={handleSubmit}
                    name={name}
                    email={email}
                    message={message}
                    setName={setName}
                    setEmail={setEmail}
                    setMessage={setMessage}
                    product={selectedProduct}
                />
            </Container>
        </div>
    );
};

export default Product;