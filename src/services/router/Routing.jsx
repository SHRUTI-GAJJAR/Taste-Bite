import React from 'react'
import Home from '../../page/Home'
import { Route, Routes } from 'react-router'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Routing