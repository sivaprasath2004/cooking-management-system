import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Orders = ({data}) => {
    const [datas,setData]=useState({})
    useEffect(()=>{
     async function fetch(){
        let result=await axios.post('https://cooking-management-system-backend.vercel.app/book',{
            id:data
        })
        if(result.data?.length===0){
          setData(pre=>({...pre,error:'No more orders'}))
        }
        else{
        setData(pre=>({...pre,orders:result.data}))
    }
     }
     fetch()
    },[])
  return (
    <div className='order_page'>
        {datas.error?<h5>undefined</h5>:<div>
            {datas.orders.map((item,index)=>(
  <>
  </>
         ))}
          </div>
        }
    </div>
  )
}

export default Orders