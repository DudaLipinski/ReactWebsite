import React from 'react'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Home from '../pages/Home'
import Companies from '../pages/Companies'
import AboutUs from '../pages/AboutUs'
import Product from '../pages/Product'
import Events from '../pages/Events'
import Event from '../pages/Event'

const App = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/product" element={<Product />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event" element={<Event />} />
    </Routes>
    <Footer />
  </HashRouter>
)

export default App
