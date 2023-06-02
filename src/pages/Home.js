import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Hero'
import PromoModule from '../modules/promo-module'
import HorizontalBlock from '../components/horizontal-block'
import Heading from '../components/heading'
import PriceList from '../modules/price-list'

import MapImg from '../images/farm-map.png'
import ImgWithDesc from '../modules/img-with-desc'
import ImgShoot1 from '../images/shoot-square-1.jpg'
import ImgShoot2 from '../images/shoot-square-2.jpg'
import ImgShoot3 from '../images/shoot-square-3.jpg'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='content tall text-center'>
        <div className='content--wrapper padd'>
          <Heading hTag='h2' text='Welcome to' altText='Cold Springs Farm' />
          <p>Clay Shooting is a thrilling sport for people of all ages. It is an ideal activity if you want to entertain friends, learn a new skill and have some fun!</p>
          <p>Clay Shooting instruction takes place individually or in small groups by one of our friendly and experienced Coaches. Prior to starting, your designated Instructor will give you a full safety briefing followed by excellent tuition, ensuring that you hit a range of targets during your session.</p>
          <p>Our excellent Clay Shooting facilities make us the ideal destination for corporate events, team building days, or hen/stag parties. If you’re looking for some fun in the peak district then try Clay Shooting! It's a great experience and a fun traditional country sport to try.</p>
          <p>For Licence holders who own their own gun, we hold a 75 bird competition on the first and last Sunday of every month. For anything else you can always find it on <a href="https://www.facebook.com/coldspringsfarmgunclub/" target="_blank" rel="no-referrer">our Facebook page</a></p>
          <p><Link to='/about'><button>Find out more about us</button></Link></p>
        </div>
      </div>

      <div className='content no-padding img-with-desc'>
        <HorizontalBlock classes='full-height' items={
          [{
            blockClass: 'img farm2 hide-mobile',
            content: (<div />)
          },
            {
              blockClass: 'desc center background',
              content: (
                <div className='text-center'>
                  <Heading hTag='h2' text='Shooting' altText='at the farm' />
                  <p>We have 75 bird competitions twice a month.</p>
                  <p>Open days where you can turn up and shoot, no need to book.</p>
                  <p>Wednesday practice is back, come and join us in the afternoons to brush up your skills!</p>
                  <p>Call or email us to enquire about any group bookings (Stag/Hen, Corporate or private events)</p>
                </div>
              )
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
                <img src={ImgShoot1} />
                <div className='round-icon--content'>
                  Great day at a great price
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='round-icon'>
                <img src={ImgShoot2} />
                <div className='round-icon--content'>
                  Friendly Fully Qualified Instructors
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='round-icon'>
                <img src={ImgShoot3} />
                <div className='round-icon--content'>
                  Something For Everyone
                </div>
              </div>
            </div>
          </PromoModule>
        </div>
      </div>

      <ImgWithDesc
        desc={(
          <div className='content--wrapper center'>
            <Heading hTag='h2' text='Corporate, Hen and Stag' altText='Events' />
            <p>Come to the farm for a day of shooting with friends and colleagues from only &pound;90pp.</p>
            <p>Our fully trained instructors will ensure you will have a safe and fun experience.</p>
            <p>You get breakfast, lunch and at least 60 shots throughout the day with prizes at the end to boast to your friends on the way home.</p>
            <p><Link to='/corporate-events'><button>Find out more</button></Link></p>
          </div>
        )}
        imgClass='farm4'
        hideImgMobile={false}
        imgRight
        blockPadding
      />

      <ImgWithDesc
        desc={(
          <div className='content--wrapper center'>
            <Heading hTag='h2' text='Sim Game' altText='Days' />
            <p>Simulated game days offer truthfully realistic, exhilarating, and challenging targets.</p>
            <p>Find out what it is like to shoot a range of quarry such as pigeon, grouse, pheasant and duck along a 10km drive. This whole day event will be truly memorable, packed with shooting, eating and drinking.</p>
            <p><Link to='/simulated-game-days'><button>Find out more</button></Link></p>
          </div>
        )}
        imgClass='farm3'
        hideImgMobile={false}
        blockPadding
      />

      <div className='content text-center'>
        <div className='content--wrapper'>
          <Heading hTag='h2' text='Our' altText='Prices' />
          <HorizontalBlock classes='spaced' items={
            [
              {
                blockClass: 'col-grid-4',
                content: (<PriceList
                  heading='Shooting Days'
                  price={(<>£70<span className='small'>pp</span></>)}
                  description={(<>75 bird competition on the first and last Sunday of every month</>)}
                  brand='shooting-price'
                >
                  <ul>
                    <li>75 Bird Sporting</li>
                    <li>13 Stands</li>
                    <li>9.30-12.00</li>
                    <li>Fibre wads only</li>
                    <li>Fab breakfasts and cakes</li>
                  </ul>

                  <div className='text-center'>
                    <Link to='/contact'><button>Find out more</button></Link>
                  </div>
                </PriceList>)
              },
              {
                blockClass: 'col-grid-4',
                content: (<PriceList
                  heading='Corporate Event'
                  price={(<>£90<span className='small'>pp</span></>)}
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
                blockClass: 'col-grid-4',
                content: (
                  <PriceList
                    heading='Hen/Stag Party'
                    price={(<>£70<span className='small'>pp</span></>)}
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
              },
              {
                blockClass: 'col-grid-4',
                content: (
                  <PriceList
                    heading='Sim Game Days'
                    price={(<>&pound;215<span className='small'>pp</span></>)}
                    brand='sim-days'
                  >
                    <>
                      <ul className="list-style-none">
                        <li className="position-relative">5 Drives set over a 10km radius</li>
                        <li className="position-relative">Quarry including Grouse, Pheasant and Partridge</li>
                        <li className="position-relative">16 gun minimum</li>
                        <li className="position-relative">Breakfast, snacks and lunch included</li>
                      </ul>
                      <div className='text-center'>
                        <Link to='/simulated-game-days'><button>Find out more</button></Link>
                      </div>
                    </>
                  </PriceList>
                )
              }
            ]
          } />
        </div>
      </div>

      <div className='content no-padding text-center'>
        <div className='content--wrapper'>
          <HorizontalBlock classes='spaced align-center' items={
            [
              {
                blockClass: 'col-span-3',
                content: (<div style={{ padding: '0 2rem' }}>
                  <Heading hTag='h2' text='How To' altText='Find Us' />
                  <p>Cold Springs Farm,<br />Manchester Road,<br />Longhill,<br />Buxton,<br />SK17 6SS</p>
                  <p>
                    We are just on the outskirs of Buxton town center in the High Peak.<br />
                    Follow the A5004 (also known as Longhill), eventually you will need turn onto a farm track to find the farm.
                  </p>
                </div>)
              },
              {
                blockClass: 'col-span-5',
                content: (<>
                  <a href='https://www.google.com/maps/place/Cold+Springs+Farm+Gun+Club/@53.2597648,-1.9357233,13.54z/data=!4m14!1m7!3m6!1s0x487a37885f6c4069:0xb60cfd952e243185!2sCold+Springs+Farm+Gun+Club!8m2!3d53.2708671!4d-1.9442464!16s%2Fg%2F11qr9g8dyf!3m5!1s0x487a37885f6c4069:0xb60cfd952e243185!8m2!3d53.2708671!4d-1.9442464!16s%2Fg%2F11qr9g8dyf' target='_blank'>
                    <img src={MapImg} alt="Cold Springs Farm Gun Club, Buxton SK17 6SS" className="map-location" />
                  </a>
                </>)
              }
            ]
          } />
        </div>
      </div>
    </>
  )
}

export default Home
