import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default function Footer(){
    return (
        <footer className="bg-midnight text-white">
            <h1 className="text-center text-3xl pt-5">Rohan Mehta</h1>
            <div className ="text-2xl text-center mt-6">
                <a href="https://www.linkedin.com/in/rohan-mehta-cf/"><FontAwesomeIcon aria-label="Linkedin Icon" icon={faLinkedin} className="mr-8 hover:text-slime"/></a>
                <a href="https://github.com/radroof22"><FontAwesomeIcon aria-label="Github Icon" icon={faGithub} className="ml-8 hover:text-slime"/></a>
            </div>
            <div className="text-center mt-5 text-xl">
                <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime">Home</Link>
                <Link to="/machine-learning" className="text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime">Machine Learning</Link>
                <Link to="/web-development" className="text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime">Web Development</Link>
                <Link to="/resume" className="text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white hover:text-slime">Resume</Link>
            </div>
            <div className="pt-8">
                
            </div>
            
        </footer>
    )
}