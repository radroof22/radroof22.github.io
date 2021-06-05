import React from 'react'
import Footer from './Footer'
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <div className="bg-night text-white">
                {children}
            </div>
            <Footer />
        </div>
    )
}
