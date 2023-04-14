import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Hero'
import { Handshake } from '@styled-icons/fa-solid/Handshake'
import { Bahai } from '@styled-icons/fa-solid/Bahai'
import { PoundSign } from '@styled-icons/fa-solid/PoundSign'
import PromoModule from '../modules/promo-module'
import HorizontalBlock from '../components/horizontal-block'
import Heading from '../components/heading'
import PriceList from '../modules/price-list'

import MapImg from '../images/farm-map.png'

const Home = () => {
  const pricesImg = () => (<div />)
  const pricesDesc = () => (<div className='text-center'><Heading hTag='h2' text='Image' altText='with text' /><p>Some text goes here</p><p>Some text goes here</p><p>Some text goes here</p><button>Lets go somewhere</button></div>)

  return (
    <>
      <Hero />
      <div className='content tall text-center'>
        <div className='content--wrapper'>
          <Heading hTag='h2' text='Welcome to' altText='Cold Springs Farm' />
          <p>Clay Shooting is a thrilling sport for people of all ages. It is an ideal activity if you want to entertain friends, learn a new skill and have some fun!</p>
          <p>Clay Shooting instruction takes place individually or in small groups by one of our friendly and experienced Coaches. Prior to starting, your designated Instructor will give you a full safety briefing followed by excellent tuition, ensuring that you hit a range of targets during your session.</p>
          <p>Our excellent Clay Shooting facilities make us the ideal destination for corporate events, team building days, outdoor experience days and private groups and lessons. Clay Shooting Gift Vouchers also make for great gift Experience days for friends, family and colleagues. If you’re looking for some fun in the country then try Clay Shooting! It’s a great experience and a fun traditional country sport to try. And who knows, you may unlock a hidden talent!</p>
          <p>For Licence holders who own their own shotgun, we hold an Open Practice Day every Wednesday between 10am and 4pm. Competitions take place every month, with fixtures and results available to view on our News & Events section (see top of page or on homepage).</p>
        </div>
      </div>

      <div className='content no-padding img-with-desc'>
        <HorizontalBlock classes='full-height' items={
          [{
            blockClass: 'price-bg hide-mobile',
            content: pricesImg()
          },
            {
              blockClass: 'desc center background',
              content: pricesDesc()
            }]
        } />
      </div>

      <div className='content text-center'>
        <div className='content--wrapper'>
          <Heading hTag='h2' text='Our Promise' altText='To You' />
          <p>We ensure that you and your party will always have a great experience at our shoot. With our friendly, experienced staff, you will always get the most out of each visit to the shooting range.</p>
          <PromoModule>
            <div className='col'>
              <div className='round-icon'>
                <span className='round-icon--wrapper'>
                  <PoundSign />
                </span>
                <div className='round-icon--content'>
                  Great day at a great price
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='round-icon'>
                <span className='round-icon--wrapper'>
                  <Handshake />
                </span>
                <div className='round-icon--content'>
                  Friendly and helpful Staff
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='round-icon'>
                <span className='round-icon--wrapper'>
                  <Bahai />
                </span>
                <div className='round-icon--content'>
                  Something else that is great!
                </div>
              </div>
            </div>
          </PromoModule>
        </div>
      </div>
      <div className='content no-padding img-with-desc'>
        <HorizontalBlock items={
          [
            {
              blockClass: 'desc',
              content: (
                <div className='content--wrapper center'>
                  <h2>Corporate, Hen and Stag <span className='brand-dark-colour thin'>Events</span></h2>
                  <p>Come to the farm for a day of shooting with friends and colleagues from only &pound;90pp.</p>
                  <p>Our fully trained instructors will ensure you will have a safe and fun experience.</p>
                  <p>You get breakfast, lunch and at least 60 shots throughout the day with prizes at the end to boast to your friends on the way home.</p>
                  <p><Link to='/corporate-events'><button>Find out more</button></Link></p>
                </div>
              )
            },
            {
              blockClass: 'price-bg hide-mobile',
              content: pricesImg()
            }
          ]
        } />
      </div>

      <div className='content text-center'>
        <div className='content--wrapper'>
          <Heading hTag='h2' text='Our' altText='Prices' />
          <HorizontalBlock classes='spaced' items={
            [
              {
                content: (<PriceList
                  heading='Corporate Event'
                  price={(<><small>From</small> £90 pp</>)}
                  description={(<>This is the description about the offer</>)}
                  brand='corporate-price'
                >
                  <>
                    <ul>
                      <li>Refreshments all day</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                    </ul>
                    <div className='text-center'>
                      <Link to='/corporate-events'><button>Find out more</button></Link>
                    </div>
                  </>
                </PriceList>)
              },
              {
                content: (<PriceList
                  heading='Shooting Days'
                  price={(<>£70 pp</>)}
                  description={(<>Events run every Sunday, with different challenges and prizes to be won!</>)}
                  brand='shooting-price'
                ></PriceList>)
              },
              {
                content: (
                  <PriceList
                    heading='Hen/Stag Party'
                    price={(<>£70 pp</>)}
                  >
                    <>
                      <ul className="list-style-none">
                        <li className="position-relative">Some feature 1</li>
                        <li className="position-relative">Some feature 2</li>
                        <li className="position-relative">Some feature 3</li>
                        <li className="position-relative">Some feature 4</li>
                        <li className="position-relative">Some feature 5</li>
                      </ul>
                      <div className='text-center'>
                        <Link to='/stag-hen-events'><button>Find out more</button></Link>
                      </div>
                    </>
                  </PriceList>
                )
              }
            ]
          } />
        </div>
      </div>

      <div className='content text-center'>
        <div className='content--wrapper'>
          <Heading hTag='h2' text='How To' altText='Find Us' />
          <HorizontalBlock classes='spaced align-center' items={
            [
              {
                blockClass: 'col-span-3',
                content: (<div style={{ padding: '0 2rem' }}>
                  <p>Cold Springs Farm,<br />Manchester Road,<br />Longhill,<br />Buxton,<br />SK17 6SS</p>
                  <p>
                    We are just on the outskirs of Buxton town center in the High Peak.<br />
                    Follow the A5004 (also known as Longhill), eventually you will need turn onto a farm track to find the farm.
                  </p>
                </div>)
              },
              {
                blockClass: 'col-span-5',
                content: (<div>
                  <a href='https://www.google.com/maps/place/Cold+Springs+Farm+Gun+Club/@53.2597648,-1.9357233,13.54z/data=!4m14!1m7!3m6!1s0x487a37885f6c4069:0xb60cfd952e243185!2sCold+Springs+Farm+Gun+Club!8m2!3d53.2708671!4d-1.9442464!16s%2Fg%2F11qr9g8dyf!3m5!1s0x487a37885f6c4069:0xb60cfd952e243185!8m2!3d53.2708671!4d-1.9442464!16s%2Fg%2F11qr9g8dyf' target='_blank'>
                    <img src={MapImg} alt="Cold Springs Farm Gun Club, Buxton SK17 6SS" className="map-location" />
                  </a>
                </div>)
              }
            ]
          } />
        </div>
      </div>
    </>
  )
}

export default Home
