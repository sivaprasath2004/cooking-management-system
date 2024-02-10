import React, { useState } from 'react'
import Time from './Time'
import './Booknow.css'
import axios from 'axios'
import guarentee from './assets/icons/guarentee.png'
const Booknow = () => {
  let time=Time()
  const [detail,setDetails]=useState({Mark:'No', bookTime:time})
  const [checker,setChecker]=useState({booking_loaded:false})
  console.log(detail)
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
  return (
    <>
     {
      !checker.booking_loaded?
    <div className='golden_chief'>
     <div>
      <div>
      <h1>Guarantee & <span>Certified</span></h1>
     <p>We assure you a flawlessly catered function with an unwavering guarantee and a steadfast commitment to maintaining the highest standards in food taste. Your event is our priority, and we stand by our promise of uncompromised excellence in both service and culinary delights. Trust us to elevate your occasion with delectable dishes, leaving a lasting impression on the taste buds of your guests.</p>
     </div>
      <img src={guarentee} alt='guarentee' />
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
      </div>
  <div style={{marginTop:-30}}>
    <h3 style={{color:detail.error===undefined?'white':'red'}}>{detail.error===undefined?"No error":detail.error}</h3>
<button className="button-50" onClick={()=>booked()}>Book</button>
</div>
     </div> 
     
         </div>
        :
        <div className='golden_chief'>
      <div style={{width:'40%',height:350,display:'flex',flexDirection:'column',
      borderRadius:25,
      boxShadow:'0 12px 12px 40rem rgb(0,0,0,.9)',backgroundColor:'white'}}>
       <img style={{width:'100%',height:200,objectFit:'contain'}} src='https://cdn-icons-png.flaticon.com/128/5290/5290058.png'  alt='check_icon'/>
       <h5>
        Your Order was booked we will contact you, in few minutes..
       </h5>
<button className="close_button" onClick={()=>setChecker(pre=>({...pre,booking_loaded:false}))}>Close</button>
      </div>
      </div>
}
    </>
  )
}

export default Booknow