import React from 'react'
import SubHero from '../SubHero'
import '../scss/SubPage.scss'

const SubPage = ({ children, heroContent, heroBackgroundImage, NavContent }) => {
  return (
    <>
      <SubHero backgroundImage={heroBackgroundImage}>
        {heroContent}
      </SubHero>
      <div className='sub-page-wrapper'>
        <div className='sub-page-wrapper--nav'>
          <NavContent />
        </div>
        <div className='sub-page-wrapper--content'>
          {children}
        </div>
      </div>
    </>
  )
}

export default SubPage
