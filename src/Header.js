import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Bars } from '@styled-icons/fa-solid/Bars'
import { FacebookSquare } from '@styled-icons/fa-brands/FacebookSquare'
import { SquarePhoneFlip } from '@styled-icons/fa-solid/SquarePhoneFlip'
import './Header.scss'
import LogoDesktop from './images/logo.png'
import HorizontalBlock from './components/horizontal-block'

const Header = () => {
  const [open, setOpen] = useState(false)
  const pageLink = (title, uri) => (<div className='text-center'><Link className='header-link' to={uri} onClick={() => setOpen(false)}>{title}</Link></div>)
  const socialMediaLinks = () => (<div className="contact-info">
    <a href="https://www.facebook.com/coldspringsfarmgunclub" target="_blank"><FacebookSquare /></a> <a href="tel:07807102952" className='tel'><SquarePhoneFlip /></a>
  </div>)

  return (
    <header className="wrapper">
      <div className="site-header">
        <div className="top-head">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={LogoDesktop} alt="brand logo" className="brand-logo" />
            </Link>
          </div>
          <div className='show--mobile'>
            <nav>
              <a onClick={() => setOpen(!open)}><Bars className="burger-menu" /></a>
            </nav>
          </div>
          <div className="show--desktop">
            <nav>
              <HorizontalBlock
                classes="nav"
                items={[pageLink('Home', '/'), pageLink('About', '/about'), pageLink('Stag/Hen Parties', '/stag-hen-events'), pageLink('Corporate', '/corporate-events'), pageLink('Sim Days', '/simulated-game-days'), pageLink('Contact', '/contact'), socialMediaLinks()]}
              />
            </nav>
          </div>
          <div className='show--mobile'>
            {socialMediaLinks()}
          </div>
        </div>
        <nav className='mobile'>
          {/*<a onClick={() => setOpen(!open)}><Bars className="burger-menu" /></a>*/}
          {
            (open) && (
              <div>
                { pageLink('Home', '/') }
                { pageLink('About', '/about') }
                { pageLink('Stag/Hen Parties', '/stag-hen-events') }
                { pageLink('Corporate Events', '/corporate-events') }
                { pageLink('Sim Days', '/simulated-game-days') }
                { pageLink('Contact', '/contact') }
              </div>
            )
          }
        </nav>
      </div>
    </header>
  )
}

export default Header
