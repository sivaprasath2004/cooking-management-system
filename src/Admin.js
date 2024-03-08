import React,{useState} from 'react'
import './Admin.css'
import axios from 'axios'
import logo from './assets/icons/cook_logo.png'
import Orders from './orders'
const Admin = () => {
  const [checker,setChecker]=useState({show:false})
  async function sign_in_check(){
    if(checker.UserName!==undefined && checker.Password!==undefined){
    if(checker.UserName.length>1 && checker.Password.length>1){
     let res=await axios.post("https://cooking-management-system-backend.vercel.app/admin",{
        UserName:checker.UserName,
        Password:checker.Password
      })
      if(res.data.status==='ok'){
      setChecker(pre=>({...pre,id:res.data.id}))
      }
      else{
      setChecker(pre=>({...pre,error:res.data}))
      }
    }
  }
    else{
      setChecker(pre=>({...pre,error:'Enter the details'}))
    }
  }
  return (
    <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center',paddingTop:70}}>
      {
        checker.id===undefined?
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',backgroundColor:'white',minWidth:350,maxWidth:430,height:400,borderRadius:20,boxShadow:'0 12px 12px 40rem rgba(0,0,0,.9)'}}>
      <div style={{width:'100%',flex:'1 0 10rem'}}>
        <div id='header'>
        <h1 id='login_account_header'>Login</h1>
        </div>
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'2rem'}}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'1.5rem'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'.4rem'}}>
        <label >UserName</label>
        <div style={{display:'flex',flexDirection:'row',border:'2px solid black',alignItems:'center',justifyContent:'center'}}>
        <input onChange={(e)=>setChecker(pre=>({...pre,UserName:e.target.value}))}
        style={{border:'none',paddingLeft:'.5rem'}} type='text' placeholder='UserName' />
        <label style={{height:30,width:30}} ></label>
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'.4rem'}}>
        <label >Password</label>
        <div style={{display:'flex',flexDirection:'row',border:'2px solid black',alignItems:'center',justifyContent:'center'}}>
        <input onChange={(e)=>setChecker(pre=>({...pre,Password:e.target.value}))}
        style={{border:'none',paddingLeft:'.5rem'}} type={checker.show?'text':'password'} placeholder='password' />
        <img  
        onClick={()=>setChecker(pre=>({...pre,show:!checker.show}))}
        style={{height:30,width:30}} src={checker.show?'https://cdn-icons-png.flaticon.com/128/2355/2355322.png':'https://cdn-icons-png.flaticon.com/128/159/159604.png'} alt='eye' />
        </div>
        </div>
        <div>
        <h2 style={{color:checker.error===undefined?'white':'red',fontSize:15}}>{checker.error===undefined?" .":checker.error}</h2>
<button className="sign_in_button" onClick={()=>sign_in_check()} ><span className="text">Sign In</span></button>
        </div>
        </div>
        </div>
      </div>
      </div>:
      <Orders data={checker.id} />
      }
      </div>
  ) 
}

export default Admin
