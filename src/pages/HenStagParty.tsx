import React from 'react'
import SubHero from '../SubHero'
import image from '../images/stag.jpg'
import EnquiryForm from "../modules/enquiry-form";

const HenStagParty  = (): JSX.Element => {
  return (
    <>
      <SubHero backgroundImage={image}>
        <h1>Hen & Stag<br /><span className='thin'>Start your party with a bang! Our packages ensure you'll have a day to remember</span></h1>
      </SubHero>
      <div className='content'>
        <div className='content--wrapper padd'>
          <h2>Hen & Stag <span className='brand-dark-colour thin'>Parties</span></h2>
          <p>Here at Cold Springs Farm, we know that you want your stag do to be unforgettable (well, mostly). That's why we put together the best in stag do packages! So if you're looking to hold a .12 gauge shotgun and shoot some clay with your mates, then these packages are ideal for you.</p>
          <p>Our instructor will provide full instruction, safety briefing and equipment. Choose one of our packages or create your own itinerary for a stag do you won't forget.</p>
          <p>Book yours today.</p>
          <p>If a Clay Pigeon Shooting stag do weekend sounds right up your street, enquire now using the form below so we can put together the best possible package for you</p>

          <EnquiryForm />
        </div>
      </div>
    </>
  )
}

export default HenStagParty
