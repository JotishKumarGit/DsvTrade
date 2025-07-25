import React from "react";
import Header from './Header';
import Footer from "./Footer";
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';


function Layout({ children, title, description, keywords, author }) {
    return (
        <>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content={author} />
                    <title>{title}</title>
                    <link rel="canonical" href="" />
                </Helmet>
                <Header />
                <main className="" style={{ minHeight: '70vh' }} >
                    <Toaster />
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

Layout.defaultProps = {
    title: 'ESS ESS ENTERPRIES',
    description: 'Mern stack app',
    keywords: 'This is our website keywords',
    author: 'Jotish'
}

export default Layout;


