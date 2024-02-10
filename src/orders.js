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
        setData(pre=>({...pre,orders:Object.values(result.data).reverse()}))
        console.log(result.data)
    }
     }
     fetch()
    },[])
  async function marked(id){
   await axios.post('http://localhost:5000/marked',{
      id:id
  })
  }
  return (
    <div className='order_page' style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        {datas.error?<h5>undefined</h5>:<div style={{marginTop:20,width:'80%',height:450,backgroundColor:'white',overflowY:'scroll',borderRadius:20}}>
            {datas.orders?.map((item,index)=>(
              <div style={{display:'flex',flexDirection:'column',width:'100%',borderBottom:`2px solid ${item.Mark!=='No'?'black':datas[index]===undefined || item.Mark==='No'?'green':'black'}`,backgroundColor:item.Mark!=='No'?'white':datas[index]===undefined || item.Mark==='No'?'lightgreen':'white'}}>
                <div style={{display:'flex',width:'100%',justifyContent:'space-evenly '}}>
                <div style={{width:'40%'}}><p><span style={{paddingRight:25}}>Name :</span>{item.name}</p>
                <p><span>Function: </span>{item.FunctionName}</p>
                <p><span>Members: </span>{item.Members}</p>
                </div>
                <div style={{width:'40%'}}>
                <p><span>Order-Date:</span>{item.Bookdate}</p>
                <p><span>Mobile  : </span>{item.MobileNumber}</p>
                <p><span>Address: </span>{item.Address?.length>55?item.Address.slice(0,50)+'...':item.Address}</p>
                </div>
                </div>
                <div style={{width:'80%',display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
                <div style={{display:'flex',gap:'2rem'}}>
                <p>{item.bookTime}</p>
                <button id='orderPage_buttons'
                onClick={()=>{
                  setData(pre=>({...pre,[index]:"S"}))
                  marked(item._id);
                }}
                className='button_mark'>
                  <img style={{height:30,width:30}} src='https://cdn-icons-png.flaticon.com/128/5291/5291032.png' alt='mark' />
                  Mark
                </button>
                <button id='orderPage_buttons' className='button_Delete'>
                  <img style={{height:30,width:30}} src='https://cdn-icons-png.flaticon.com/128/484/484611.png' alt='trash' />
                  Delete
                </button>
                </div>
                </div>
                </div>  
         ))}
          </div>
        }
    </div>
  )
}

export default Orders