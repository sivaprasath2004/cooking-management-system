import React, { useState } from 'react'
import Time from './Time'
import './Booknow.css'
import axios from 'axios'
import guarentee from './assets/icons/guarentee.png'
import cheif from './assets/cheif'
import data from './assets/data'
const Booknow = () => {
  let time=Time()
  const [detail,setDetails]=useState({Mark:'No', bookTime:time})
  const [checker,setChecker]=useState({booking_loaded:false})
  let dishes=[]
  async function booked(){
    if(detail.name===undefined ||detail.MobileNumber===undefined||detail.FunctionName===undefined||detail.Members===undefined||detail.Address===undefined){
        setDetails(pre=>({...pre,error:"Fill the form"}))
      }
      else{
        if(detail.MobileNumber.length===10){
      if(
        detail.name.length>=3 &&  detail.MobileNumber.length===10 && detail.FunctionName.length>=3 && detail.Members.length>=1 && detail.Address.length>=4){
          setChecker(pre=>({...pre,booking_loaded:true}))
          await axios.post('https://cooking-management-system-backend.vercel.app/details',{
        detail:detail,
      })
      setDetails({Mark:'No', bookTime:time})
    }
    else{
      setDetails(pre=>({...pre,error:'Enter valid details'}))
    }
  }
  else{
    setDetails(pre=>({...pre,error:"Enter valid Mobile Number"}))
  }
    }
  }
  console.log(dishes)
  return (
    <>
     {
      !checker.booking_loaded?<>
    <div className='golden_chief'>
    <h1>Guarantee & <span>Certified</span></h1>
     <div>
      <div id='content'>
     <p>We assure you a flawlessly catered function with an unwavering guarantee and a steadfast commitment to maintaining the highest standards in food taste. Your event is our priority, and we stand by our promise of uncompromised excellence in both service and culinary delights. Trust us to elevate your occasion with delectable dishes, leaving a lasting impression on the taste buds of your guests.</p>
     </div>
     <div id='image'>
      <img src={guarentee} alt='guarentee' />
      </div>
     </div>
     <div id='Book_now'>
      <h2>
        Book Now
      </h2>
      <div id='Book_now_container'>
        <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' alt='profile' />
        <div id='input_box'>
        <input type='text'
        value={detail.name} placeholder='name' onChange={(e)=>setDetails(pre=>({...pre,name:e.target.value}))} />
      </div>
      </div>
      <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/1551/1551353.png'  alt='Mobile Number'/>
      <div id='input_box'>
        <input type='text' placeholder='Mobile Number'
        value={detail.MobileNumber} onChange={(e)=>setDetails(pre=>({...pre,MobileNumber:e.target.value}))}/>
      </div>
      </div>
      <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/6557/6557720.png'  alt='function'/>
      <div id='input_box'>
        <input type='text'
        value={detail.FunctionName} placeholder='Function Name' onChange={(e)=>setDetails(pre=>({...pre,FunctionName:e.target.value}))}/>
      </div>
      </div>
      <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/33/33308.png'  alt='members'/>
      <div id='input_box'>
        <input type='text'
        value={detail.Members}
        placeholder='How many Attenders' onChange={(e)=>setDetails(pre=>({...pre,Members:e.target.value}))}/>
      </div>
      </div>
      <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/55/55281.png'  alt='members'/>
      <div id='input_box'>
        <input type='date'
        value={detail.Bookdate}
        placeholder='Date' onChange={(e)=>setDetails(pre=>({...pre,Bookdate:e.target.value}))}/>
      </div>
      </div>
      <div id='input_container' >
        <img src='https://cdn-icons-png.flaticon.com/128/9077/9077975.png'  alt='location'/>
      <div id='input_box' className='textarea_container' >
        <textarea
        value={detail.Address}
        rows={3} placeholder='Function Location' onChange={(e)=>setDetails(pre=>({...pre,Address:e.target.value}))}/>
      </div>
      </div>
      <h2 style={{fontSize:18,fontWeight:'600'}}>Select Your Cook</h2>
      {checker.image!==undefined?<div style={{display:'flex',flexWrap:'wrap',width:'90%',padding:10,justifyContent:'center',alignItems:'center',borderRadius:15,boxShadow:'0 1px 1px rgba(0,0,0,0.5)'}}>
        <img src={cheif[checker.image].url} alt={cheif[checker.image].name+'chief'} key={cheif[checker.image].name} style={{flex:'1 0 8rem',height:150,width:150,objectFit:'contain'}} />
        <div key='cheifImage_container' style={{flex:'1 0 8rem',display:'flex',flexDirection:'column'}}>
          <p key={`cheif_name`}>{cheif[checker.image].name}</p>
          <p key={`cheif_exper`}>{cheif[checker.image].experience}</p> </div>
      </div>:<></>}
      <div style={{display:'flex',flexWrap:'wrap',width:'90%',justifyContent:'center',alignItems:'center'}}>
      {
        cheif.map((item,index)=>(
         <>
     <img src={item.url} alt={`img_chiefs_bookPage_images${index}`} key={`images_tag_chief_bookpage${index}`} style={{width:100,height:100,objectFit:'contain',padding:3,border:checker.image===index?'1px solid black':'1px solid white'}} onClick={()=>setChecker(pre=>({...pre,image:index}))}/>
         </> 
        ))
      }
      </div>
      <h2 style={{fontSize:18,fontWeight:'600'}}>Select Your Dish</h2>
      <div style={{display:'flex',flexWrap:'wrap',width:'90%',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
       {
        data.breakfast.map((item,index)=>(
          <img src={item.url} alt={`img_breakfast_dis${index}`} key={`images_tag_breakfast_food_book${index}`} style={{width:100,height:100,objectFit:'contain',padding:3,border:dishes[index]===index?'1px solid black':'1px solid white'}} onClick={()=>dishes.push(item.heading)}/>
        ))
       }
 {
        data.lunch.map((item,index)=>(
        
          <img src={item.url} alt={`img_lunch_dish${index+4}`} key={`images_tag_lunch_food_book${index+4}`} style={{width:100,height:100,objectFit:'contain',padding:3,border:dishes[index+4]===index+4?'1px solid black':'1px solid white'}} onClick={()=>dishes.push(item.heading)}/>
        ))
       }
        {
        data.dinner.map((item,index)=>(
          <img src={item.url} alt={`img_dinner_dish${index+8}`} key={`images_tag_dinner_food_book${index+8}`} style={{width:100,height:100,objectFit:'contain',padding:3,border:dishes[index+8]===index+8?'1px solid black':'1px solid white'}} onClick={()=>dishes.push(item.heading)}/>
        ))
       }
      </div>
      </div>
  <div style={{display:'flex',flexDirection:'column',paddingTop:10}}>
    <h3 style={{color:detail.error===undefined?'white':'red'}}>{detail.error===undefined?"No error":detail.error}</h3>
<button className="button-50" onClick={()=>booked()}>Book</button>
</div>
     </div> 
     
         </div>
         </>
        :
        <div style={{display:'grid',placeItems:'center'}}>
      <div style={{width:'90%',maxWidth:400,height:350,display:'flex',marginTop:'10rem',flexDirection:'column',
      borderRadius:25,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
       <img style={{width:'100%',height:200,objectFit:'contain'}} src='https://cdn-icons-png.flaticon.com/128/5290/5290058.png'  alt='check_icon'/>
       <h5 style={{textAlign:'center'}}>
        Your Order was booked we will contact you, in few minutes..
       </h5>
<button className="close_button" onClick={()=>setChecker(pre=>({...pre,booking_loaded:false}))} style={{width:'50%'}}>Close</button>
      </div>
      </div>
}
    </>
  )
}

export default Booknow