import React from 'react'
import ContactViewModel from './ViewModel'
import SubHero from '../../SubHero'
import Input from '../components/form/Input'
import { User } from '@styled-icons/fa-solid/User'

import view from '../../images/view.jpg'
import '../../modules/enquiry-form.scss'

const Contact = (): JSX.Element => {
  const { full_name, phone, email, onChange } = ContactViewModel()

  return (
    <>
      <SubHero backgroundImage={view}>
        <h1>Contact Us</h1>
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
              <td><a href="tel:07807102952">07807 102 952</a></td>
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

          <form>
            <div className='form-row'>
              <div className='col-span-2'>
                <Input
                  label='Full Name'
                  type='text'
                  name='full_name'
                  value={full_name}
                  handleChange={onChange}
                  icon={<User />}
                  placeholder='Full Name'
                />
              </div>
              <div className='col-span-2'>
                <Input label='Tel No' type='text' name='phone' value={phone} icon={<User />} handleChange={onChange} />
              </div>
            </div>
            <div className='form-row'>
              <Input label='Email Address' type='text' name='email' value={email} icon={<User />} handleChange={onChange} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
