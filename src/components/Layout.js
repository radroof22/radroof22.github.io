import React from 'react'
import Footer from './Footer'
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"

export default function Layout({children}) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rohan Mehta's Portfolio</title>
            </Helmet>
            <Navbar />
            <div className="bg-night text-white">
                {children}
            </div>
            <Footer />
        </div>
    )
}
