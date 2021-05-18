import React from 'react'
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <div class="bg-purple-800">
                {children}
            </div>
        </div>
    )
}
