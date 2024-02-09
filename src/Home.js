import React, { useState } from 'react'
import detail from './data'
import './Home.css'
import logo from './assets/icons/cook_logo.png'
import chief from './assets/icons/chief_image.png'
import chinies from './assets/icons/chinies.png'
import { Link } from 'react-router-dom'
const Home = () => {
  const data=detail.data
    const [checker,setChecker]=useState({})
  return (
    <div id='home_page'>
      <div id='Heading'>
        <div>
      <h1 id='head'>
        Enjoy <span>Delicious</span> <span>Food</span> in your Health Life
      </h1>
      <p>
      Embark on a culinary journey, where every bite delights your senses, nourishes your body, and fuels a vibrant, healthy life
      </p>
<Link to='/book' className="button-85" role="button">Book now</Link>
</div>
<div>
        <img src={logo} alt='chief_logo' />
     
      </div>
      </div>
      <div id='sample_recepie'>
        <div>
        <h2>Our famous dish</h2>
        </div>
        <div>
       {data.map((item)=>( 
       <div>
        <img src={item.url} alt={item.alt} />
        <h2>{item.heading}</h2>
        <p>{checker[item.alt]===undefined || !checker[item.alt]?item.content.slice(0,35)+'...':item.content}</p>
        <button 
        style={{width:'60%',height:30,backgroundColor:checker[item.alt]===undefined || !checker[item.alt]?'#ff7300':'white',borderRadius:25,border:checker[item.alt]===undefined || !checker[item.alt]?'none':'1px solid #ff7300',boxShadow:'0 12px 12px rgba(0,0,0,0.2)'}}
        onClick={()=>setChecker((pre)=>({...pre,[item.alt]:checker[item.alt]===undefined?true:!checker[item.alt]}))}>{checker[item.alt]===undefined || !checker[item.alt]?'See More':'See less'}</button>
        </div>
))}
</div>

      </div>
      <div id='people_choose'>
  <img src={chinies} alt='china food' />
  <div>
    <h4>Why People Choose Us?</h4>
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
<div id='custome_support'>
  <div>
    <h5>Customer <span>Feedback</span></h5>
  <p>At Cooking Order and Cook Management, your satisfaction is our priority. We welcome your feedback on user-friendliness, order accuracy, and delivery timeliness to enhance your experience. Share your thoughts on menu diversity and cuisine preferences, helping us tailor our offerings to match your tastes. Your insights on customization, ingredient quality, and freshness guide us in providing a personalized and enjoyable cooking journey. Additionally, feedback on communication, support, technical performance, and sustainability practices is invaluable for continuous improvement and ensuring your experience is exceptional.
  </p>
  </div>
  <img src={chief} alt='chief'/>
</div>
<div style={{width:'100%',backgroundColor:'white'}}>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',height:60}}>
<img style={{height:30,width:30}} src='https://cdn-icons-png.flaticon.com/128/814/814587.png' alt='world' />
<Link id='Footer_link' to='https://github.com/sivaprasath2004'>support</Link>
<Link id='Footer_link' to='/about'>About</Link>
<Link id='Footer_link' to='/contact'>Contact</Link>
<Link id='Footer_link' to='/book'>Book</Link>
<Link id='Footer_link' to='/admin'>Admin</Link> 
<h6>@copyright <Link to='https://github.com/sivaprasath2004'>Sivaprasath2004</Link></h6>
</div>
</div>
    </div>
  )
}

export default Home