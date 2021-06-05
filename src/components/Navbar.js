import React, {useState} from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-midnight ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">Rohan Mehta</Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <Link to="/machine-learning" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Machine Learning</Link>
                </li>
                <li className="nav-item">
                    <Link to="/web-development" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Web Development</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Resume</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}
