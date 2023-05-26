import React from 'react'
import './enquiry-form.scss'

const EnquiryForm = () => (
  <>
    <h2>Get In <span className='thin'>Touch</span></h2>
    <p>If you have any questions or would like more information about what we can offer, availability etc... Don't hesitate to get in touch and we will get back to you as soon as possible.</p>
    <form onSubmit={() => console.log("Sending Form")}>
      <div className='form-row'>
        <div className='col-span-2'>
          <label>First Name</label>
          <input type='text' name='fname' value='' />
        </div>
        <div className='col-span-2'>
          <label>Last Name</label>
          <input type='text' name='sname' value='' />
        </div>
      </div>

      <div className='form-row'>
        <div className='col-span-4'>
          <label>Email Address</label>
          <input type='email' name='email' value='' />
        </div>
      </div>

      <div className='form-row'>
        <div className='col-span-2'>
          <label>Subject</label>
          <select name='subject'>
            <option value=''>-</option>
            <option value='shooting'>Shooting Days</option>
            <option value='hen-stag'>Hen/Stag Party</option>
            <option value='corporate'>Corporate Event</option>
            <option value='general'>Other/General</option>
          </select>
        </div>
        <div className='col-span-2'>
          <label>Telephone No.</label>
          <input type='tel' name='phone' value='' />
        </div>
      </div>

      <div className='form-row'>
        <div className='col-span-4'>
          <label>Enquiry</label>
          <textarea name='details'></textarea>
        </div>
      </div>
      <div>
        <button type='submit' name='submitForm'>Enquire</button>
      </div>
    </form>
  </>
)

export default EnquiryForm
