import React from 'react'
import { Link } from 'react-router-dom'
import { Bars } from '@styled-icons/fa-solid/Bars'

const SubPageNavigation = ({navArray, basePath, currentPage}) => {
  const [active, setActive] = React.useState(false)

  const openClass = (active) ? 'open' : 'closed'

  return (
    <nav className="subpage-nav">
      <div
        className='menu-toggle'
        onClick={() => setActive(!active)}
      >
        <Bars />
      </div>
      <ul className={openClass}>
        {
          navArray.map(({ path, title }) => {
            const isActive = (currentPage === path) ? 'active' : ''
            return (<li key={basePath+path} className={isActive}><Link to={basePath+path}>{title}</Link></li>)
          })
        }
      </ul>
    </nav>
  )
}

export default SubPageNavigation
