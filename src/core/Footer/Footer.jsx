import React from 'react'

import Logo from 'images/footer-logo.png'
import './footer.css'

function Footer() {
  return (
    <footer className="centralizer-container bg-blue">
      <div className="centered-content flex space-between equal-columns space">
        <div className="font-small">

          <address className="font-white">
            <div className="flex flex-start margin-small">
              <p>Phone:</p>
              <a className="font-white semi-bold" href="phone:0000-0000">0000-0000</a>
            </div>
            <p className="font-white margin-small">08:00-17:00</p>
            <div className="flex flex-start margin-small">
              <p>Mail:</p>
              <a className="font-white semi-bold" href="mailto:info@company.se">info@company.se</a>
            </div>
          </address>
          <nav>
            <ul className="flex flex-start">
              <li>
                <a href="/"><span className="icon icon-facebook" aria-hidden="true" /></a>
              </li>
              <li>
                <a href="/">
                  <span className="icon icon-instagram" />
                  {' '}
                </a>
              </li>
              <li>
                <a href="/"><span className="icon icon-twitter" aria-hidden="true" /></a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="font-smaller font-red-2">Company</h4>
          <nav>
            <ul className="font-small semi-bold">
              <li><a className="font-white" href="/">Link 1</a></li>
              <li><a className="font-white" href="/">Link 2</a></li>
              <li><a className="font-white" href="/">Link 3</a></li>
              <li><a className="font-white" href="/">Link 4</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="font-smaller font-red-2">Products</h4>
          <nav>
            <ul className="font-small semi-bold">
              <li><a className="font-white" href="/">Link 1</a></li>
              <li><a className="font-white" href="/">Link 2</a></li>
              <li><a className="font-white" href="/">Link 3</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="font-smaller font-red-2">About Us</h4>
          <nav>
            <ul className="font-small semi-bold">
              <li>
                <a className="font-white" href="/">Link 1</a>
              </li>
              <li>
                <a className="font-white" href="/">
                 Link 2
                </a>
              </li>
              <li><a className="font-white" href="/">Link 3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
