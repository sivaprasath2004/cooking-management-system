import React, { useState } from 'react'
import './Booknow.css'
const Booknow = () => {
    const [checker,sechecker]=useState({
    })
  return (
    <>
  
    <div className='booknow'>
        <form>
          <div>
          <input type='text' name='name'
          required
          onChange={(e)=>sechecker(pre=>({...pre,name:e.target.value}))}
          />
          <label htmlFor='name' style={{position:'relative',top:checker.name===undefined || checker.name===""?-25:-50}}>Name</label>
          </div>
          <div>
          <input type='text' name='Function'
          required
          onChange={(e)=>sechecker(pre=>({...pre,Function:e.target.value}))}
          />
          <label htmlFor='Function' style={{position:'relative',top:checker.Function===undefined || checker.Function===""?-20:-50}}>Function</label>
          </div>
          
        </form>
    </div>

    </>
  )
}

export default Booknow