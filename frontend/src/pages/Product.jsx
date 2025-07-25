
import React from 'react';
import img_1 from '../assets/img_1.jpeg';
import img_2 from '../assets/img_2.jpeg';
import img_3 from '../assets/img_3.jpeg';
import img_4 from '../assets/img_4.jpeg';
import img_5 from '../assets/img_5.jpeg';
import img_6 from '../assets/img_6.jpeg';
import img_7 from '../assets/img_7.jpeg';
import img_8 from '../assets/img_8.jpeg';


const products = [
    {
        id: 1,
        title: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with Bluetooth 5.0.',
        price: 129.99,
        image: img_1
    },
    {
        id: 2,
        title: 'Smart Watch',
        description: 'Track your fitness and notifications on the go.',
        price: 89.99,
        image: img_2
    },
    {
        id: 3,
        title: 'Gaming Mouse',
        description: 'High precision wireless gaming mouse.',
        price: 49.99,
        image: img_3
    },
    {
        id: 4,
        title: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with Bluetooth 5.0.',
        price: 129.99,
        image: img_4
    },
    {
        id: 5,
        title: 'Smart Watch',
        description: 'Track your fitness and notifications on the go.',
        price: 89.99,
        image: img_5
    },
    {
        id: 6,
        title: 'Gaming Mouse',
        description: 'High precision wireless gaming mouse.',
        price: 49.99,
        image: img_6
    },
    {
        id: 7,
        title: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with Bluetooth 5.0.',
        price: 129.99,
        image: img_7
    },
    {
        id: 8,
        title: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear headphones with Bluetooth 5.0.',
        price: 129.99,
        image: img_8
    },

];


const Product = () => {


    return (
        <div className="container-fluid">
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        {products.map(product => (
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text text-muted">{product.description}</p>
                                        <h6 className="mt-auto">Price: ${product.price}</h6>
                                        <button className="btn btn-primary mt-2">View Details</button>
                                        <button className="btn btn-primary mt-2">Enquery</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

