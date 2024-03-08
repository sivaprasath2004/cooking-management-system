import React, { useState } from 'react'
import detail from './assets/data'
import './Home.css'
import logo from './assets/icons/cook_logo.png'
import chief from './assets/icons/chief_image.png'
import chinies from './assets/icons/chinies.png'
import { Link } from 'react-router-dom'
const Home = () => {
  const breakfast=detail.breakfast
  const lunch=detail.lunch
  const dinner=detail.dinner
  return (
    <div id='home_page'  style={{display:'flex',flexWrap:'wrap'}}>
      <div id='Heading'>
        <div id='first_child'>
      <h1 id='head'>
        Enjoy <span>Delicious</span> <span>Food</span> in your Health Life
      </h1>
      <p>
      Embark on a culinary journey, where every bite delights your senses, nourishes your body, and fuels a vibrant, healthy life
      </p>
<Link to='/book' className="button-85" role="button">Book now</Link>
</div>
<div id='second_child'>
        <img src={logo} alt='chief_logo' />
     
      </div>
      </div>
      <h4>Our Famous Packages</h4>
      <div id='sample_recepie'>
        <div>
          <h2>Breakfast Packages</h2>
        </div>
        <div>
       {breakfast.map((item)=>( 
       <div>
        <img src={item.url} alt={item.alt} />
        <h2>{item.heading}</h2>
        <p>{item.prize}</p>
       </div>
))}
</div></div>
<div id='sample_recepie'>
        <div>
          <h2>Lunch Packages</h2>
        </div>
        <div>
       {lunch.map((item)=>( 
       <div>
        <img src={item.url} alt={item.alt} />
        <h2>{item.heading}</h2>
        <p>{item.prize}</p>
       </div>
))}
</div></div>
<div id='sample_recepie'>
        <div>
          <h2>Dinner Packages</h2>
        </div>
        <div>
       {dinner.map((item)=>( 
       <div>
        <img src={item.url} alt={item.alt} />
        <h2>{item.heading}</h2>
        <p>{item.prize}</p>
       </div>
))}
</div></div>
      <h4>Why People Choose Us?</h4>
      <div id='people_choose'>
  <img src={chinies} alt='china food' />
  <div>
    <div>

    <p id='head'>Deliciously Diverse Menu</p>
    <p>
      Indulge your taste buds with our diverse range of culinary delights, carefully crafted from premium ingredients. From savory classics to exotic specialties, our menu offers a delightful array of options to satisfy every craving.
      </p>
      <p id='head'>Effortless Ordering Experience</p>
    <p>Streamline your mealtime routine with our user-friendly and efficient ordering system. Enjoy the convenience of placing your cooking orders effortlessly, allowing you more time to savor the moments while we prepare and deliver the flavors you love</p>
    </div>
  </div>
</div>
<div className='custome_support'>
<h5>Customer <span>Feedback</span></h5>
</div>
<div id='custome_support'>
  <div>
  <p>At Cooking Order and Cook Management, your satisfaction is our priority. We welcome your feedback on user-friendliness, order accuracy, and delivery timeliness to enhance your experience. Share your thoughts on menu diversity and cuisine preferences, helping us tailor our offerings to match your tastes. Your insights on customization, ingredient quality, and freshness guide us in providing a personalized and enjoyable cooking journey. Additionally, feedback on communication, support, technical performance, and sustainability practices is invaluable for continuous improvement and ensuring your experience is exceptional.
  </p>
  </div>
  <img src={chief} alt='chief'/>
</div>
<div style={{width:'100%',backgroundColor:'white'}}>
<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center'}}>
<div style={{flex:'1 0 8rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
<img style={{height:30,width:30,objectFit:'contain'}} src='https://cdn-icons-png.flaticon.com/128/814/814587.png' alt='world' />
</div>
<Link id='Footer_link' to='https://github.com/yamuna001/shopping-application'>support</Link>
<Link id='Footer_link' to='/about'>About</Link>
<Link id='Footer_link' to='/contact'>Contact</Link>
<Link id='Footer_link' to='/book'>Book</Link>
<Link id='Footer_link' to='/admin'>Admin</Link> 
</div>
</div>
    </div>
  )
}

export default Home