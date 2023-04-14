import React from 'react'
import SubHero from '../../SubHero'
import bg1 from '../../images/bg1.png'
import bg2 from '../../images/farm-1.jpg'

const About = (): JSX.Element => {
  return (
    <>
      <SubHero backgroundImage={bg1}>
        <h1>About Us<br /><span className='thin'>Clay pigeon shooting for all ages and experience</span></h1>
      </SubHero>
      <div className='content'>
        <div className='content--wrapper'>
          <h2>About <span className='brand-dark-colour thin'>Cold Springs Farm</span></h2>
          <img src={bg2} alt='Cold Springs Farm' className='inline-img inline-img-right inline-img-medium' />
          <p>Cold Springs Farm Campsite is a working farm located near to Buxton, a spa town at the heart of the Peak District National Park.<br />The campsite provides lovely views across Buxton and the surrounding countryside.</p>
          <p>This is a basic campsite which is better suited for educational, Duke of Edinburgh Award, back packers and low maintenance campers. Buxton is less than an hour journey from the cities of Manchester, Sheffield, Stoke on Trent and Derby and an hour and a half from Nottingham. Set 1000 feet above sea level amidst the dramatic Peak district landscape, Buxton has been a popular holiday resort for centuries.</p>
          <h3><span className='brand-dark-colour'>Facilities On The Farm</span></h3>
          <ul>
            <li>On-Site Parking</li>
            <li>Toilets</li>
            <li>Safety Equipment Provided</li>
            <li>Fully licensed bar that seres food</li>
            <li>Guns/bullets etc... provided</li>
            <li>Fully qualified Instructors</li>
          </ul>

          <div className='content'>
            <h2>The <span className='brand-dark-colour thin'>Shooting</span></h2>
            <p>Clay Shooting is a thrilling sport for people of all ages. It is an ideal activity if you want to entertain friends, learn a new skill and have some fun!</p>
            <p>Clay Shooting instruction takes place individually or in small groups by one of our friendly and experienced Coaches. Prior to starting, your designated Instructor will give you a full safety briefing followed by excellent tuition, ensuring that you hit a range of targets during your session.</p>
            <p>Our excellent Clay Shooting facilities make us the ideal destination for corporate events, team building days, outdoor experience days and private groups and lessons. Clay Shooting Gift Vouchers also make for great gift Experience days for friends, family and colleagues. If you’re looking for some fun in the country then try Clay Shooting! It’s a great experience and a fun traditional country sport to try. And who knows, you may unlock a hidden talent!</p>
            <p>For Licence holders who own their own shotgun, we hold an Open Practice Day every Wednesday between 10am and 4pm. Competitions take place every month, with fixtures and results available to view on our News & Events section (see top of page or on homepage).</p>
          </div>

          <h2>The <span className='brand-dark-colour thin'>Local Area</span></h2>
          <p>Cold Springs Farm Campsite is located in the heart of the Peak District surrounded by the National Park itself and within easy reach of a wealth of attractions. </p>
          <p>You will never be short of things to do during your stay at Cold Springs, whether you are an adrenaline junkie looking to get your next fix, a walking enthusiast looking to explore the beautiful countryside or a family looking for some time away from home, Buxton and the surrounding areas have it all.</p>
          <h3 className='brand-dark-colour'>Activities</h3>
          <p>Activities in the local area include climbing, walking, mountain biking, caving, gliding and flying, horse riding, shooting and various other sports. To find out more about the activities on offer <a target="_blank" href="http://www.visitbuxton.co.uk/category/thingstodo/">click here</a>.</p>
          <h3 className='brand-dark-colour'>Buxton Festival</h3>
          <p>Buxton Festival is a 19-day summer arts event showcasing the finest opera, music and literature. It is held in the historic spa town of Buxton, set in the beautiful Peak District – a perfect mix of culture and countryside. The festival is now recognised as one of the UK’s largest and best arts festivals. <a target="_blank" href="http://www.buxtonfestival.co.uk/">click here for more info</a>.</p>
          <h3 className='brand-dark-colour'>Local Attractions</h3>
          <p>Buxton and the surrounding towns and villages are full of beautiful historic buildings and landmarks including the Buxton Opera House, Chatsworth House, Harwick Hall and Lyme Park. To find out more about these local attractions <a target="_blank" href=" http://www.visitderbyshire.co.uk/places_to_visit-2-25-0-1.ihtml">click here</a>.</p>
          <h3 className='brand-dark-colour'>Family Activities</h3>
          <p>Buxton is a great place for families, the town features a wealth of outdoor play areas and playgrounds or if you like something more adventurous why not swing from the trees at Go Ape. To find out more about family activities in Buxton <a target="_blank" href="http://www.visitbuxton.co.uk/category/thingstodo/families-and-outdoors/">click here</a>.</p>
          <h3 className='brand-dark-colour'>Walking</h3>
          <p>Cold Springs Farm is ideally located for a huge range of popular walks. Whether you are looking for a long hike or a short stroll there is something for everyone. To find out more about the walks available <a target="_blank" href="http://www.visitbuxton.co.uk/walking/">click here</a>. </p>
        </div>
      </div>
    </>
  )
}

export default About
