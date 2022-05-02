import React from 'react'
import ReactDomClient from 'react-dom/client'

import App from 'core'

import './css/icons.css'
import './css/styles.css'

const reactRoot = ReactDomClient.createRoot(
  document.getElementById('react-app'),
)

reactRoot.render(<App />)
