import React from 'react'
import ContactViewModel from './ViewModel'
import SubHero from '../../SubHero'
import HorizontalBlock from "../../components/horizontal-block";

import view from '../../images/view.jpg'
import EnquiryForm from "../../modules/enquiry-form";

const Contact = (): JSX.Element => {
  const { full_name, phone, email, onChange } = ContactViewModel()

  return (
    <>
      <SubHero backgroundImage={view}>
        <h1>Contact Us</h1>
      </SubHero>
      <div className='content'>
        <div className='content--wrapper padd'>
          <HorizontalBlock classes='spaced' items={
            [
              {
                blockClass: 'col-span-4',
                content: (<>
                  <h2>Contact <span className='brand-dark-colour thin'>Details</span></h2>
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

                  <div className='spacer' />

                  <h2>Find <span className='brand-dark-colour thin'>Us</span></h2>
                  <p>Cold Springs Farm,<br />Manchester Road,<br />Longhill,<br />Buxton,<br />SK17 6SS</p>
                </>)
              },
              {
                blockClass: 'col-span-4',
                content: (<EnquiryForm />)
              }
            ]
          } />
        </div>
      </div>
    </>
  )
}

export default Contact
