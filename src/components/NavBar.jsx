import React from 'react'
import testBiteLogo from '../assets/svg/testBiteLogo.svg'

const NavBar = () => {
  return (
    <nav>
        <div className="logoWrap">
            <img src={testBiteLogo} alt="logoIcon" />
        </div>
    </nav>
  )
}

export default NavBar