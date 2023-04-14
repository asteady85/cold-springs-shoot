import React, {useEffect, useState} from 'react'
import useViewModel from './ViewModel'
import SubHero from '../../SubHero'
import view from '../../images/view.jpg'
import Input from '../components/form/Input'
import { User } from '@styled-icons/fa-solid/User'
// import List from "../../../components/List"
// import Button from "../../../components/Button"

const Contact = (): JSX.Element => {
  const [val, setVal] = useState('')
  // const { products, getProducts } = useViewModel()

  // useEffect(() => {
  //   getProducts()
  // }, [])

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
            <Input
              label='Full Name'
              type='text'
              name='full_name'
              value={val}
              icon={<User />}
              placeholder='Full Name'
              handleChange={setVal}
            />
        {/*    <Input label='Email Address' type='text' name='email' value={} icon={} />*/}
        {/*    <Input label='Tel No' type='text' name='phone' value={} icon={} />*/}
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
