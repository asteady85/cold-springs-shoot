import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowAltCircleRight } from '@styled-icons/fa-solid/ArrowAltCircleRight'

const HomeLink = ({ title, children, link }) => (
  <div className='some-module col'>
    <div className='some-module--header'>
      <h4>{title}</h4>
      <div className='some-module--content'>
        {children}
        <p className='text-center' style={{ paddingTop: '20px' }}><Link className='some-module--link' to={link} title={title}>Find Out More <ArrowAltCircleRight /></Link></p>
      </div>
    </div>
  </div>
)

export default HomeLink