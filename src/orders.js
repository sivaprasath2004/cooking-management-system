import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Orders = ({data}) => {
  const [refresh,setRefresh]=useState(false)
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
    }
     }
     fetch()
    },[refresh])
    setInterval(function() {
      setRefresh(!refresh)
  }, 40000);
  async function marked(id){
   await axios.post('https://cooking-management-system-backend.vercel.app/marked',{
      id:id
  })
  
  }
  async function DeleteOrder(id){
    console.log(id)
 let value=datas.orders.filter(item=>item._id!==id)
setData(pre=>({...pre,orders:value}))
   await axios.post('https://cooking-management-system-backend.vercel.app/delete',{
      id:id
  })
  }
  return (
    <div className='order_page' style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        {datas.error?<h5>undefined</h5>:<div style={{flex:'.9 0 8rem',width:'80%',height:500,backgroundColor:'white',overflowY:'scroll',borderRadius:20}}>
            {datas.orders?.map((item,index)=>(
              <div key={`first${index}`}
               style={{display:'flex',flexDirection:'column',width:'100%',borderBottom:`2px solid ${item.Mark!=='No' || datas[index]!==undefined?'black':'green'}`,backgroundColor:item.Mark!=='No' || datas[index]!==undefined ?'white':'lightgreen'}}>
                <div key={`second${index}`}
                style={{display:'flex',width:'100%',justifyContent:'space-evenly '}}>
                <div key={`Third${index}`}
                style={{width:'40%'}}><p key={`first_p${index}`}><span key={`first_span${index}`} style={{paddingRight:25}}>Name :</span>{item.name}</p>
                <p key={`second_p${index}`}><span key={`second_span${index}`}>Function: </span>{item.FunctionName}</p>
                <p key={`third_p${index}`}><span key={`third_span${index}`}>Members: </span>{item.Members}</p>
                </div>
                <div style={{width:'40%'}} key={`third${index}`}>
                <p key={`fourth_p${index}`}><span key={`fourth_span${index}`}>Order-Date:</span>{item.Bookdate}</p>
                <p key={`fifth_p${index}`}> <span key={`fifth_span${index}`}>Mobile  : </span>{item.MobileNumber}</p>
                <p key={`six_p${index}`}><span key={`six_span${index}`}>Address: </span>{item.Address?.length>55?item.Address.slice(0,50)+'...':item.Address}</p>
                </div>
                </div>
                <div key={`fifth${index}`} style={{width:'80%',display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
                <div key={`six${index}`} style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <p key={`seven_p${index}`} style={{color:'blue',flex:'2 0 8rem'}}>{item.bookTime}</p>
               {item.Mark!=='No' || datas[index]!==undefined?<div style={{flex:0}}></div>:
                <button key={`first_button${index}`} id='orderPage_buttons'
                style={{flex:'1 0 8rem',display:'flex',justifyContent:'center',display:'grid',alignSelf:'center',alignItems:'center'}}
                onClick={()=>{
                  setData(pre=>({...pre,[index]:"S"}))
                  marked(item._id);
                }}
                className='button_mark'>
                  <img key={`first_1_img${index}`} style={{height:30,width:30}} src='https://cdn-icons-png.flaticon.com/128/5291/5291032.png' alt='mark' />
                  Mark
                </button>
}
                <button id='orderPage_buttons' key={`second_button${index}`}
                style={{flex:'1 0 8rem'}}
                className='button_Delete' onClick={()=>DeleteOrder(item._id)}>
                  <img key={`first_2_img${index}`} style={{height:30,width:30}} src='https://cdn-icons-png.flaticon.com/128/484/484611.png' alt='trash' />
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