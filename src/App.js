import React, { useState ,useEffect} from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Booknow from './Booknow'
import Admin from './Admin'
import logo from './assets/icons/cook_logo.png'
import { Link, Routes,Route } from 'react-router-dom'
const App = () => {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timerId);
    }, []); 
  return (
    <>
    {
      !isVisible?
      <>
      <div transition-style="in:wipe:bottom-right" style={{display:'flex',flexWrap:'wrap',height:'100vh',backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
      <div style={{flex:'1 0 10rem',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
       <h1 style={{color:'white',fontSize:30,textAlign:'center'}}>
        Hello Welcome To
       </h1>
       <h2 style={{textShadow: '-2px -2px 2px green',color:'green',fontSize:40,textAlign:'center'}}>
        Cooking Management system
       </h2>
      </div>
      <div style={{flex:'1 0 10rem',display:'flex',justifyContent:'center',marginTop:'-5rem',alignItems:'center'}}>
        <img src={logo} alt='logo' style={{objectFit:'contain'}} />
      </div>
      <h5 style={{color:'white',position:'absolute',padding:10,bottom:'0%'}}>@copyright 
      <Link to='https://github.com/Sivaprasath2004'>
       Sivaprasath2004</Link></h5>
      </div>
      
      </>
      : 
      <>
    <div className='nav'>
      <h1>Cooking Mangement</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/book'>Book</Link>
    </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/book' element={<Booknow />} />
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </>
}
    </>
  )
}

export default App