import React, { useEffect,useState } from 'react'
import axios from 'axios'
import cheif from './assets/cheif'
const Orders = ({data}) => {
  const [refresh,setRefresh]=useState(false)
    const [datas,setData]=useState({delete:false})
    useEffect(()=>{
     async function fetch(){
     setData(pre=>({...pre,delete:false}))
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
    },[datas.delete?datas.delete:refresh])
    setInterval(function() {
      setRefresh(!refresh)
  }, 40000);
  async function marked(id){
   await axios.post('https://cooking-management-system-backend.vercel.app/marked',{
      id:id
  })
  
  }
  async function DeleteOrder(id){
    let value=datas.orders.filter(item=>item._id!==id)
setData(pre=>({...pre,orders:value}))
   await axios.post('https://cooking-management-system-backend.vercel.app/delete',{
      id:id
  })
  setData(pre=>({...pre,delete:true}))
  }
  return (
    <div className='order_page' style={{height:'100%',width:'100%',display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center',alignItems:'center',paddingTop:60}}>
        {datas.error?<h5>undefined</h5>:
        <>
            {datas.orders?.map((item,index)=>(
              <div key={`first${index}`}
               style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'95%',backgroundColor:'white',borderRadius:15}}>
                 <div key={`item_manage_con${index}`} style={{flex:'1 0 8rem',display:'flex',flexWrap:'wrap'}}>
                 <img key={`order_page_image_${index}`} src={cheif[item.Cheif].url}  style={{height:250,flex:'1 0 20rem',width:250,objectFit:'contain',margin:10}} alt={cheif[item.Cheif].name}/>
                
                <div key={`menus_item_${index}`} style={{flex:'1 0 20rem',padding:10,gap:20,display:'flex',flexDirection:'column',flexWrap:'wrap',flexFlow:'row wrap'}}>
                  {
                    item.Menu.map((item,index)=>
                    (
                      <p  style={{flexGrow:0.1}} key={`menu_items${index}`}>{`${index+1}.${item}`}</p>
                    )
                    )
                  }
                </div>
                </div>
                <h1 key={`heading_order_page_${index}`}>userDetails</h1>
                <div key={`userDetailed_container${index}`} style={{display:'flex',width:'100%',padding:10,flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <div key={`userDetails_order_page_${index}`} style={{flex:'1 0 8rem',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
                 <p key={`order_user_name${index}`}>{`name:${item.name}`}</p>
                 <p key={`user_mobile_no${index}`}>{`Mob-no:${item.MobileNumber}`}</p>
                 <p key={`Address_user_${index}`}>{`Address:${item.Address}`}</p>
                </div>
                <div key={`userDetails_2order_page_${index}`} style={{flex:'1 0 8rem',width:'50%',alignSelf:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
                  <p key={`order_user_Book${index}`}>{`Book Date:${item.Bookdate}`}</p>
                  <p  key={`FunctionName_user_${index}`}>{`Function:${item.FunctionName}`}</p>
                  <p key={`Members_user_${index}`}>{`Members${item.Members}`}</p>
                </div>
                </div>
                <h3 style={{display:'grid',alignSelf:'center',fontSize:18,color:'blue'}} key={`Booking_Time${index}`}>{`Book Time:${item.bookTime}`}</h3>
                <div style={{flex:'1 0 8rem',display:'flex',width:'100%',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
                <button key={`marked_button_order_${index}`}
                style={{width:150,height:40,backgroundColor:datas[index]==='S' || item.Mark==='marked'?'white':'black',color:datas[index]==='S' || item.Mark==='marked'?'black':'white',fontSize:20,fontWeight:'900',border:'none',borderRadius:10,boxShadow:'0 12px 12px rgba(0,0,0,0.5)'}}
                onClick={datas[index]==='S' || item.Mark==='marked'?()=>console.log(""):()=>{
                  setData(pre=>({...pre,[index]:"S"}))
                  marked(item._id);
                }}
                >{datas[index]==='S' || item.Mark==='marked'?"✔ Marked":"Mark"}</button>
                <button key={`Delete_button_order_${index}`}
                onClick={()=>DeleteOrder(item._id)}
                style={{width:150,height:40,backgroundColor:'black',color:'white',fontSize:20,fontWeight:'900',border:'none',borderRadius:10,boxShadow:'0 12px 12px rgba(0,0,0,0.5)'}}
                >Delete</button>
                </div>
                </div>  
         ))}
          </>
        }
    </div>  
  )
}

export default Orders