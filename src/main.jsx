import React from 'react'
import ReactDOM from 'react-dom/client'
import FunctionalInput from './FunctionalInput'
import ClassInput from './ClassInput'
import Welcome from './Welcome'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClassInput />
  </React.StrictMode>,
)
