import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from 'images/logo.png'

import initHeaderAnimation from './headerAnimation'
import './header.css'

function Header() {
  useEffect(() => {
    initHeaderAnimation()
  }, [])

  return (
    <header className="centralizer-container bg-white">
      <div className="centered-content flex space-between align-center">
        <div>
          <Link
            to="/"
          >
            <img
              id="header-logo"
              src={Logo}
              className="logo"
              alt="Productsslogotyp, en symbol för bokstaven B i gröna nyanser med texten company."
            />
          </Link>
        </div>
        <div>
          <nav className="menu">
            <ul className="flex space-between align-center font-small">
              <li><Link className="font-green" to="#products">Products</Link></li>
              <li><Link className="font-green" to="#company">Company</Link></li>
              <li><Link className="font-green" to="about-us">About Us</Link></li>
              <li><Link className="oblong-button bg-blue font-white" to="events">Event</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
