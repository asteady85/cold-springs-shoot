import React from 'react'
import SubHero from '../SubHero'
import view from '../images/view.jpg'

const Contact = () => {
  return (
    <>
      <SubHero backgroundImage={view}>
        <p>Cold Springs Farm</p>
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2>Get <span className='brand-dark-colour thin'>In Touch</span></h2>
          <table>
            <tbody>
            <tr>
              <td className="right">Tel:</td>
              <td><a href="tel:01298111222">01298 111 222</a></td>
            </tr>
            <tr>
              <td className="right">Mob:</td>
              <td><a href="07777888999">07777 888 999</a></td>
            </tr>
            <tr>
              <td className="right">Email:</td>
              <td><a href="mailto:info@coldsprings.co.uk">info@coldsprings.co.uk</a>
              </td>
            </tr>
            </tbody>
          </table>

          <h2>Find <span className='brand-dark-colour thin'>Us</span></h2>
          <p>Cold Springs Farm,<br />Manchester Road,<br />Longhill,<br />Buxton,<br />SK17 6SS</p>
        </div>
      </div>
    </>
  )
}

export default Contact
