import React, { useState } from 'react'
import detail from './assets/data'
import './Home.css'
import logo from './assets/icons/cook_logo.png'
import chief from './assets/icons/chief_image.png'
import chinies from './assets/icons/chinies.png'
import { Link } from 'react-router-dom'
const Home = () => {
  const [item,setItems]=useState("breakfast")
  const [load,setLoad]=useState(false)
  function handleClick(item){
      setLoad(true)
   setTimeout(()=>{
      setItems(item)
    },500)
    setTimeout(()=>{
      setLoad(false)
      },500)
  }
  return (
    <div id='home_page'  style={{display:'flex',flexWrap:'wrap'}}>
      <div id='Heading'>
        <div id='first_child'>
      <h1 id='head'>
        Enjoy <span>Delicious</span> <span>Food</span> in your Health Life
      </h1>
      <p id="Slogan">
      Embark on a culinary journey, where every bite delights your senses, nourishes your body, and fuels a vibrant, healthy life
      </p>
      <div style={{display:'flex',width:'100%',justifyContent:'flex-start',alignItems:'flex-start',gap:40}}>
<Link to='/book' className="page_button" role="button">Book now</Link>
<Link to='/about' className="page_button" id='page_button_white' role="button">About US</Link>
</div>
</div>
<div id='second_child'>
        <img src={logo} alt='chief_logo' />
     
      </div>
      </div>
      <h4 id='headings'>Our Famous Packages</h4>
      <div style={{width:'100%',height:50,display:'flex',justifyContent:'center',alignItems:'center',gap:30}}>
<h2 style={{color:item==="breakfast"?'black':'#413d3d',borderBottom:item==="breakfast"?'3px solid red':'1px solid transparent',cursor:'pointer'}} onClick={()=>item==="breakfast"?null:handleClick('breakfast')} id='packages'>Breakfast</h2>
<h2 style={{color:item==="lunch"?'black':'#413d3d',borderBottom:item==="lunch"?'3px solid red':'1px solid transparent',cursor:'pointer'}} onClick={()=>item==="lunch"?null:handleClick('lunch')} id='packages'>Lunch</h2>
<h2 style={{color:item==="dinner"?'black':'#413d3d',borderBottom:item==="dinner"?'3px solid red':'1px solid transparent',cursor:'pointer'}} onClick={()=>item==="dinner"?null:handleClick('dinner')} id='packages'>Dinner</h2>
      </div>
      <div id='sample_recepie'>
        <div>
          <h2 id='packageName'>{`${item.toUpperCase()} PACKAGE`}</h2>
        </div>
        <div className="image-container" id={load?"":"image-container"}>
       {detail[item].map((item,index)=>( 
       <div key={`parent_tag_${item}${index}`}>
        <img key={`its_img${item}${index}`} src={item.url} alt={item.alt} />
        <h2 id='packageName' key={`its_name${item}${index}`} style={{textAlign:'center'}}>{item.heading}</h2>
        <p id='packageName' key={`its_prize${item}${index}`} style={{fontSize:14}}>{item.prize}</p>
       </div>
))}
</div></div>
      <h4 id='headings'>Why People Choose Us?</h4>
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
<h5 id='headings'>Customer <span>Feedback</span></h5>
</div>
<div id='custome_support'>
  <div>
  <p id="Slogan">At Cooking Order and Cook Management, your satisfaction is our priority. We welcome your feedback on user-friendliness, order accuracy, and delivery timeliness to enhance your experience. Share your thoughts on menu diversity and cuisine preferences, helping us tailor our offerings to match your tastes. Your insights on customization, ingredient quality, and freshness guide us in providing a personalized and enjoyable cooking journey. Additionally, feedback on communication, support, technical performance, and sustainability practices is invaluable for continuous improvement and ensuring your experience is exceptional.
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