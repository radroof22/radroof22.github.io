import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <div class="bg-midnight p-5 text-white">
            <nav class="container mx-auto flex justify-between">
                <div>
                    <Link to="/" class="text-xl"><h1>Rohan Mehta</h1></Link>
                </div>
                <ul class="flex flex-row">
                    <li class="pr-5"><Link to="/machine-learning">Machine Learning</Link></li>
                    <li class="pr-5"><Link to="/web-development">Web Development</Link></li>
                    <li class="pr-5"><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </div>
    )
}
