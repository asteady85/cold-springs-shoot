import React from 'react'
import '../scss/breadcrumbs.scss'

const Breadcrumbs = ({ title, subTitle }) => (
  <div className='breadcrumbs'>
    <h2><span>{title}</span></h2>
    {
      (subTitle.length > 0) && (<h3>{subTitle}</h3>)
    }
  </div>
)

export default Breadcrumbs
