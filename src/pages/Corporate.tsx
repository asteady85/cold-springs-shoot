import React, {ReactElement} from 'react'
import SubHero from '../SubHero'
import EnquiryForm from "../modules/enquiry-form"
import HorizontalBlock from "../components/horizontal-block"

import image from '../images/stag.jpg'

interface itineraryPropTypes {
  children:any,
  icon?: ReactElement
}
const Itinerary = ({ children }: itineraryPropTypes) => (<p>{children}</p>)
const silver = () => (<div>
  <h3>Silver Package</h3>
  <p>Includes 60 clays and cartridges, full tuition, loan of gun and safety protection – £90pp.  5/6 people in a group.  This package is split into 2/3 sessions takes approx. Timings are dependent on group size</p>
  <Itinerary>Welcome Breakfast Sausage or Bacon or Veggie Sandwich.<br />Tea & Coffee</Itinerary>
  <Itinerary>Safety Talk with Instructor</Itinerary>
  <Itinerary>20 practice shots</Itinerary>
  <Itinerary>Tea & Coffee</Itinerary>
  <Itinerary>20 Target competition (1st Round)</Itinerary>
  <Itinerary>Buffet Lunch</Itinerary>
  <Itinerary>20 Target competition (2nd Round)</Itinerary>
  <Itinerary>Prize Giving and refreshments</Itinerary>
</div>)

const gold = () => (<div>
  <h3>Gold Package</h3>
  <p>Includes 75 clays and cartridges, full tuition, loan of gun and safety protection – £105pp.  5/6 people in a group.  This package is split into 2/3 sessions takes approx. Timings are dependent on group size</p>
  <Itinerary>Welcome Breakfast Sausage or Bacon or Veggie Sandwich.<br />Tea & Coffee</Itinerary>
  <Itinerary>Safety Talk with Instructor</Itinerary>
  <Itinerary>25 practice shots</Itinerary>
  <Itinerary>Tea & Coffee</Itinerary>
  <Itinerary>25 Target competition (1st Round)</Itinerary>
  <Itinerary>Buffet Lunch - Your chosen local Joint for sandwiches, homemade soups, warm pastries, cheese board to finish.</Itinerary>
  <Itinerary>25 Target competition (2nd Round)</Itinerary>
  <Itinerary>Prize Giving and refreshments</Itinerary>
</div>)

const CorporateEvents  = (): JSX.Element => {
  return (
    <>
      <SubHero backgroundImage={image}>
        <h1>Corporate Days Out<br /><span className='thin'>Nothing says great team building quite like clay pigeon shooting!</span></h1>
      </SubHero>
      <div className='content'>
        <div className='content--wrapper padd'>
          <h2>Private & Corporate <span className='brand-dark-colour thin'>Events</span></h2>
          <p>In the beautiful Derbyshire hills, overlooking Buxton, Cold Springs Farm can provide outstanding Private and Corporate clay shooting events for 10 to 100 guests.</p>
          <p>Our clay pigeon shooting events have everything you need for a truly memorable experience, from the clay shooting right through to the delicious meals form our cafe. It has proven time and time again to be an exciting private or corporate event because everyone can take part and best of all, no experience is necessary! The professional instructors at Cold Springs Farm will ensure that everyone has a fantastic time and receive expert tuition. We have an extensive range of shotguns available to suit all shapes and sizes, as well as having specially loaded cartridges which give less recoil. Each stand has multiple traps which means that mixed abilities can be in the same team and still be individually tested by different difficulties of clay targets, tailored to the individual – so no more feeling like you’re in the wrong team!</p>
          <p>With a relaxed atmosphere and delicious meals, your event will be looked after impeccably, so you don’t have to worry about a thing.</p>

          <h2>Package <span className='thin'>Itineraries</span></h2>
          <p>See our available packages below:</p>
          <HorizontalBlock items={
            [{
              blockClass: '',
              content: silver()
            },
              {
                blockClass: '',
                content: gold()
              }]
          } />

          <EnquiryForm />
        </div>
      </div>
    </>
  )
}

export default CorporateEvents
