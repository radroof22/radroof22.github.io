import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <div className="bg-midnight p-5 text-white">
            <nav className="container mx-auto md:flex justify-between">
                <div>
                    <Link to="/" className="text-xl"><h1>Rohan Mehta</h1></Link>
                </div>
                <ul className="flex flex-row">
                    <li className="pr-5"><Link to="/machine-learning">Machine Learning</Link></li>
                    <li className="pr-5"><Link to="/web-development">Web Development</Link></li>
                    <li className="pr-5"><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </div>
    )
}
