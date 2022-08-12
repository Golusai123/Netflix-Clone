import React, { useEffect, useState } from 'react'
import './Nav.css'
import netflix from "./images/netflix.jpg"
import avatar from "./images/Netflixavatar.png"
import transparent from "./images/netflixTransparent.png"
function Nav() {

// const[show , sethandleShow] = useState(false);

// useEffect(() => {
//   window.addEventListener("scroll" , () => {
//     if(window.scrollY > 100){
//       sethandleShow(true);
//     } else sethandleShow(false);
//   });
//   return () => {
//     window.removeEventListener("scroll");
//   };
// }, []);

  return (
    <div className="nav">
  {/* <img src={transparent} alt="" className='logo' /> */}
  <h2 className='logo'>NETFLIX</h2>
     <img src={avatar} alt="" className="avatar" />
    </div>
  )
}

export default Nav
