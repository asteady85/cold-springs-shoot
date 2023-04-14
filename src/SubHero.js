import React from 'react'
import './scss/SubHero.scss'

const SubHero = ({ children, backgroundImage }) => {
  return (
    <div className="sub-hero text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="sub-hero--content">
        {children}
      </div>
    </div>
  )
}

export default SubHero
