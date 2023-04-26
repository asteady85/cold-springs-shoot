import React from 'react'
import SubHero from '../../SubHero'
import bg1 from '../../images/bg1.png'
import bg2 from '../../images/farm-1.jpg'

const SimGameDay = (): JSX.Element => {
  return (
    <>
      <SubHero backgroundImage={bg1}>
        <h1>Simulated Game Days<br /><span className='thin'>Offer truthfully realistic, exhilarating, and challenging targets</span></h1>
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2>Simulated <span className='brand-dark-colour thin'>Game Days</span></h2>
          <p>A truly memorable day, hosted in the high peak high peak Cold Springs simulated game days offer truthfully realistic, exhilarating, and challenging targets.  We will transport you between drives set over a 10km radius of the high peak, making the most of the beautiful topography each drive is tailored to represent a range of quarry including Fast Grouse, High Pheasant and nippy partridge.</p>
          <p>Cold Springs Simulated Game Days provides the fun of a game day out of season. All the fun without the feathers – whether you simply want to keep your eye in for the upcoming season, a clay shooter looking to try something a little different or simply want to experience the thrills of a fantastic sport at a fraction of the cost.</p>
          <p>We look forward to you joining us at Cold Springs for and abundance of good food and drink, good company, and even better shooting</p>
          <p>Tailor your day – various packages available, all of which include:</p>
          <ul>
            <li>Five drives</li>
            <li>Breakfast, elevenses and lunch</li>
            <li>Thousands of targets</li>
          </ul>
          <p>Prices from £215 (16 gun minimum)</p>
          <h3>Example Itinerary</h3>
          <p>We meet in the morning for coffee and breakfast sandwiches before drawing pegs and heading to the first drives of the day. Refreshments are available throughout the day. On completion of the second drive, we will take a break for elevenses served infield. Drives three and four will shot and we will again break for refreshments and lights snacks. Guests will then complete the day with drive 5 and regroup at the shoot lodge for a BBQ and refreshments.</p>
          <h3>Available Drives</h3>
          <p>With a range of locations across the high peak cold springs can lend itself perfectly to simulated game shooting with steep valleys, woodland and lakes. Closely replicating –</p>
          <ul>
            <li>Pidgeon</li>
            <li>Partridge</li>
            <li>Grouse</li>
            <li>Pheasant</li>
            <li>Duck</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SimGameDay
