import './App.scss'
import FetchData from './FetchData'
import React, { useState } from 'react'
import { Select } from 'antd'
function App() {
  return (
    <div className="App">

      <FetchData url="https://open.er-api.com/v6/latest/UAH" />
    </div>
  )
}

export default App
