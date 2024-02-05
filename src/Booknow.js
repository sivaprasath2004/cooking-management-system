import React, { useState } from 'react'
import './Booknow.css'
import guarentee from './assets/icons/guarentee.png'
import detail from './data'
const Booknow = () => {
  const chief=detail.chief
  return (
    <>
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
        <input type='text' placeholder='name' />
      </div>
      </div>
      <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/1551/1551353.png'  alt='Mobile Number'/>
      <div id='input_box'>
        <input type='text' placeholder='Mobile Number' />
      </div>
      </div>
      <div id='input_container'>
        <img src='https://cdn-icons-png.flaticon.com/128/6557/6557720.png'  alt='function'/>
      <div id='input_box'>
        <input type='text' placeholder='Function Name' />
      </div>
      </div>
      <div id='input_container' >
        <img src='https://cdn-icons-png.flaticon.com/128/9077/9077975.png'  alt='location'/>
      <div id='input_box' className='textarea_container' >
        <textarea rows={3} placeholder='Location' />
      </div>
      </div>
      </div>
     </div>
         </div>

    </>
  )
}

export default Booknow