import React from 'react'
import Layout from '../components/Layout/Layout'
import Slider from './Slider'
import CardSlider from './CardSlider'
import About from './About'

function Home() {
    return (
        <Layout title={'Home Page'}>
            <Slider />
            <CardSlider />
            <About />
        </Layout>
    )
}

export default Home;
