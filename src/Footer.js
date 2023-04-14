import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Footer.scss'
import { PhoneAlt } from '@styled-icons/fa-solid/PhoneAlt'

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className='content'>
          <div className='content--wrapper'>
            <div className='grid grid-gap grid--col3'>
              <div className='col'>
                <h3>Contact Details</h3>
                <p className="f_email"><a href="mailto:info@coldspringsfarm.co.uk">info@coldspringsfarm.co.uk</a></p>
                <p className="f_number">T: 01298 111 222 | M: 07807 102 952</p>
              </div>
              <div className='col'>
                <h3>Find Us</h3>
                <p>Cold Springs Farm,<br />Manchester Road,<br />Longhill,<br />Buxton,<br />SK17 6SS</p>
                <a href='https://www.google.com/maps/search/Cold+Springs+Farm+Gun+Club/@53.2692382,-1.9396824,16.38z' target='_blank'>Maps Link</a>
              </div>
              <div className='col'>
                <h3>Useful Links</h3>
                <ul>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/stag-hen-events">Stag and Hen Parties</Link></li>
                  <li><Link to="/corporate-events">Private & Corporate Events</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
