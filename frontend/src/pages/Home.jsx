import React from 'react'
import Layout from '../components/Layout/Layout'
import Slider from './Slider'
import CardSlider from './CardSlider'
import About from './About'
import Product from './Product';
import Service from './Service';
import Test from './Test';
import BackImage from './BackImage';
import Faq from './Faq'
import NewsLetter from './NewsLetter'
import Contact from './Contact'


function Home() {
    return (
        <Layout title={'Home Page'}>
            <Slider />
            <CardSlider />
            <About />
            <Product />
            <BackImage />
            <Service />
            <Test />
            <Faq />
            <NewsLetter />
            <Contact />
        </Layout>
    )
}

export default Home;
