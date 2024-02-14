import React from 'react'
import cheif from './assets/cheif'
const About = () => {
  return (
    <div className='About_page'>
   <div style={{marginTop:50,display:'flex',flexDirection:'column',fontSize:20,fontWeight:600}}>
    <h1>About Us</h1>
<<<<<<< HEAD
    <div style={{padding:'1rem',marginTop:-60,width:'100%',display:'flex',flexWrap:'wrap-reverse',justifyContent:'center',gap:0,alignItems:'center'}}>
      <div style={{flex:'1.8 0 20rem',maxWidth:'80%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <p style={{fontSize:18,fontWeight:500,textAlign:'left'}}>
At our core, we're passionate about crafting unforgettable culinary experiences. With a commitment to quality ingredients and creative flair, we strive to delight taste buds and create lasting memories. Our journey began with a vision to redefine traditional flavors and elevate dining experiences. Guided by innovation and a dedication to excellence, we aim to be your go-to destination for gastronomic adventures. Welcome to a world where every dish tells a story, and every bite is an invitation to savor the extraordinary.</p>
</div>
    <div  style={{flex:'1.5 0 20rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
=======
    <div style={{marginTop:-50,width:'100%',display:'flex',flexWrap:'wrap-reverse',justifyContent:'center',gap:0,alignItems:'center'}}>
      <div style={{flex:'1 0 10rem',maxWidth:'80%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <p style={{fontSize:18,fontWeight:500,textAlign:'left'}}>
At our core, we're passionate about crafting unforgettable culinary experiences. With a commitment to quality ingredients and creative flair, we strive to delight taste buds and create lasting memories. Our journey began with a vision to redefine traditional flavors and elevate dining experiences. Guided by innovation and a dedication to excellence, we aim to be your go-to destination for gastronomic adventures. Welcome to a world where every dish tells a story, and every bite is an invitation to savor the extraordinary.</p>
</div>
    <div  style={{flex:'1 0 10rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
>>>>>>> refs/remotes/origin/main
    <img src={require('./assets/icons/about_page_logo.png')} alt='about' style={{height:350,objectFit:'contain',display:'grid',alignSelf:'center'}} />
    </div>
    </div>
   </div>
   <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <h1>Our Golden Cheifs</h1>
    <div style={{width:'90%',height:50,display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
{
  cheif.map((item,index)=>(
    <div key={`first_tag ${index}`} id='About_goldn_cheif' style={{flex:'.5 0 8rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:15}}>
     <img src={item.url} alt={`img${index}`} style={{padding:'2rem',width:200,height:200,objectFit:'contain'}}/>
     <h2 style={{fontSize:16}}>{item.name}</h2>
     <h3 style={{fontSize:16,color:'#333'}}>{item.experience}</h3>
      </div>
  ))
}
    </div>
   </div>
   <p style={{padding:20}}>.</p>
    </div>
  )
}

export default About
